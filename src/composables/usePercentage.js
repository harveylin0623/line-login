export const usePercentage = (currentValue, maxValue) => {
  const percentage = computed(() => {
    const unValue = toValue(currentValue)
    const unMax = toValue(maxValue)
    const result = Math.ceil(unValue / unMax * 100)
    return result
  })

  return { percentage }
}