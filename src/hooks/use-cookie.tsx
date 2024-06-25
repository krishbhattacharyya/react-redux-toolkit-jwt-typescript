import Cookies from "js-cookie"

export default function useCookie() {
  function getName(str: string) {
    let val;
    if(Cookies.get(str)){
      val = Cookies.get(str)
    } else {
      val =''
    }
    return val
  }

  function setName(str: string, value: string) {
    Cookies.set(str, value)
  }

  return { getName, setName }
}
