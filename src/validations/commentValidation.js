const commentValidation = (values) => {
    const errors = {}
  
    if(!values.email || values.email === ""){
        errors.email = "You must fill the email!"
    }
  
    if(!values.body || values.body === ""){
      errors.body = "You must fill the comment!"
    }
  
    if(!values.name || values.name === ""){
      errors.name = "Name cannot be empty!"
    }

    if(!values.postId || values.postId === ""){
        errors.postId = "Post data cannot be empty!"
      }
  
    return errors
  
  }
  
  export default commentValidation