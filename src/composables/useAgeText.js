export const useAgeText = (func) => {
  const ageText = computed(() => {
    const text = toValue(func)
    return `${text}歲`
  })

  return { ageText }
}