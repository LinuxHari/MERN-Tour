import { useGetReviewQuery } from "../redux/api/baseApi"

const useReviewHandler = (tourId: string) => {
  const { isLoading, isError, data: reviews } = useGetReviewQuery(tourId)
    return 
}

export default useReviewHandler