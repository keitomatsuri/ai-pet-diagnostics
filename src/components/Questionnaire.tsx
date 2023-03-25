import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { questions } from "@/data/questions_ja";
import { Question } from "@/types/question";
import { Option } from "@/types/option";
import { useState } from "react";
import Loading from "./Loading";

type FormData = {
  [key: string]: string;
}

export default function Questionnaire() {
  const defaultDiagnosticResult = 'ここにAIからの提案が表示されます。'

  const [diagnosticResult, setDiagnosticResult] = useState<string>(defaultDiagnosticResult)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')


  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    setDiagnosticResult('')
    setLoading(true)
    setError('')

    // diagnosis

    const JSONdata = JSON.stringify(formData)

    const endpoint = '/api/diagnosis'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    try {
      const response = await fetch(endpoint, options)

      if (!response.ok) {
        setError('データの取得に失敗しました。時間をおいて再度お試しください。')
        setLoading(false)
      } else {
        const data = response.body;

        if (!data) {
          return;
        }
        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunkValue = decoder.decode(value);
          setDiagnosticResult((prev) => prev + chunkValue);
        }

        setLoading(false)
      }
    } catch (error) {

    }
  };

  return (
    <div className="px-6 py-6 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto lg:px-48">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center">
            {questions.map((question: Question) => {
              return (
                <div key={question.id} className="w-full my-6 bg-white border border-gray-200 rounded-lg shadow divide-y">
                  <div className="px-6 py-4">
                    <p className="text-md text-gray-900">{question.text}</p>
                  </div>
                  <div className="flex flex-col items-start px-6 py-4">
                    {question.options.map((option: Option) => {
                      return (
                        <div key={option.id} className="flex w-full items-center pl-4 pr-2 border border-gray-200 rounded my-1">
                          <input
                            {...register(option.question_id)}
                            type="radio"
                            value={option.id}
                            id={option.question_id + '-' + option.id}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            disabled={isLoading}
                          />
                          <label htmlFor={option.question_id + '-' + option.id} className="w-full py-3 ml-2 text-md text-gray-900">{option.text}</label>
                        </div>
                      )
                    })}
                    <div className="my-2 text-red-500">
                      <ErrorMessage errors={errors} name={question.id} as="p" />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
          <div className='text-center my-6'>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-6 py-3 mr-2 mb-2"
              disabled={isLoading}>診断する</button>
          </div>
        </form>

        <div className="flex items-center">
          <div className="w-full py-6 my-6 bg-white border border-gray-200 rounded-lg shadow">
            {
              isLoading
                ? <Loading />
                : <div className="pb-6 px-6 text-md whitespace-pre-wrap">
                  {
                    error
                      ? error
                      : diagnosticResult
                  }
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}