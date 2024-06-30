import { APIFactRequestError, SITEFactRequestError } from "@/domain"
import { useFactsService, useFactsServiceManager } from "@/services"
import { AxiosError } from "axios"
import { useState } from "react"

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (message: SITEFactRequestError) => void
}

interface useMutationInterface<TVariables, TData>
  extends MutationOptions<TData> {
  mutationFn: (variables: TVariables) => Promise<TData>
}

function ErrorAdapter(error: APIFactRequestError):SITEFactRequestError {
  return {
    message: {
      us: error.message.en,
      es: error.message.es,
      br: error.message.pt,
    }
  }
}

export function useMutation<TVariables, TData>({
  mutationFn,
  onSuccess,
  onError,
}: useMutationInterface<TVariables, TData>) {
  const { searching } = useFactsService()
  const { setSearching } = useFactsServiceManager()
  const [error, setError] = useState<AxiosError<SITEFactRequestError> | undefined>(undefined)

  async function mutate(variables: TVariables) {
    try {
      setSearching(true)
      setError(undefined)
      const data = await mutationFn(variables)
      if (onSuccess) {
        onSuccess(data)
      }
    } catch (error) {
      console.log('error', error)
      const e = error as AxiosError<APIFactRequestError>
      if (e.response) {
        setError(error as AxiosError<SITEFactRequestError>)
        const err = ErrorAdapter(e.response.data)
        if (onError) {
          onError(err)
        }
      }
    } finally {
      setSearching(false)
    }
  }

  return {
    mutate,
    searching,
    error,
  }
}
