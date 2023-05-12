const useTimeFormat = (value) => {
  const hours = Math.floor(value / 60)
  const minute =  value % 60
  return { minute, hours }
}

export default useTimeFormat;