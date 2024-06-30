import { toast } from "@/components/ui/use-toast";
import { SITEFact, randomService } from "@/domain";
import { useMutation } from "@/hooks";
import { useSiteLanguage } from "@/services";
import { useFactsServiceManager } from "@/services";

export function useGetRandomFact() {
  const { language } = useSiteLanguage()
  const { setFact } = useFactsServiceManager()

  const { mutate, error } = useMutation<undefined, SITEFact>({
    mutationFn: () => randomService.getRandomFact(),
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