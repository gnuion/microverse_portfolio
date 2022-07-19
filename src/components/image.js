const elementStyle = {
  maxHeight: "16rem",
  borderRadius: "0.6rem",
  width: "100%",
  objectFit: "cover"
}

const Image = ({url}) => {
  const element = document.createElement('img')
  element.src = url

  for (let property in elementStyle) {
    element.style[property] = elementStyle[property];
  }

  return element
}

export default Image