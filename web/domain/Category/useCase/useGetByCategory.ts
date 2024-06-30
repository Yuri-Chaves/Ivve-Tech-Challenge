import { toast } from "@/components/ui/use-toast";
import { SITEFact, categoryService } from "@/domain";
import { useMutation } from "@/hooks";
import { TCategory, useSiteLanguage } from "@/services";
import { useFactsServiceManager } from "@/services";

type UseGetByCategoryParams = {
  category: TCategory
}

export function useGetByCategory() {
  const { language } = useSiteLanguage()
  const { setFact } = useFactsServiceManager()

  const { mutate, error } = useMutation<UseGetByCategoryParams, SITEFact>({
    mutationFn: params => categoryService.getByCategory(params),
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
