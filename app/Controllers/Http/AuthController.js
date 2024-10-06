// app/Controllers/Http/AuthController.js

const User = use('App/Models/User')

class AuthController {
  async login({ request, auth, response }) {
    const { email, password } = request.all()

    try {
      // Intenta autenticar al usuario con el email y la contraseña
      const token = await auth.attempt(email, password)
      return response.json({ token })
    } catch (error) {
      return response.status(400).json({ message: 'Invalid email or password' })
    }
  }

  async register({ request, response }) {
    const { email, password } = request.all()

    try {
      // Crear un nuevo usuario
      const user = await User.create({ email, password })
      return response.status(201).json({ message: 'User created successfully', user })
    } catch (error) {
      return response.status(400).json({ message: 'Error creating user', error })
    }
  }
}

module.exports = AuthController
