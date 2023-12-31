type DataFilter = {
  _index: string
  _id: string
  _score: number
  _source: Record<string, unknown>
}

export const transformData = (arr: DataFilter[]) => {
  const transformResult = arr.map((el) => el._source)
  return transformResult
}
