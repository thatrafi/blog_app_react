const postValidation = (values) => {
  const errors = {}

  if(!values.title || values.title === ""){
      errors.title = "You must fill the title!"
  }

  if(!values.body || values.body === ""){
    errors.body = "You must fill the content!"
  }

  if(!values.userId || values.userId === ""){
    errors.userId = "User cannot be empty!"
  }

  return errors

}

export default postValidation