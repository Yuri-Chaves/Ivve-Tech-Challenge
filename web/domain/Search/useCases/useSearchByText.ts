import { toast } from "@/components/ui/use-toast";
import { SITEFact, searchService } from "@/domain";
import { useMutation } from "@/hooks";
import { useSiteLanguage } from "@/services";
import { useFactsServiceManager } from "@/services";

type UseSearchByTextParams = {
  text: string
}

export function useSearchByText() {
  const { language } = useSiteLanguage()
  const { setFact } = useFactsServiceManager()

  const { mutate, error } = useMutation<UseSearchByTextParams, SITEFact>({
    mutationFn: params => searchService.getByText(params),
    onSuccess: data => {
      setFact(data)
    },
    onError: error => {
      toast({
        variant: 'destructive',
        title: error.message[language],
      })
    }
  })

  return {
    mutate,
    error,
  }
}
