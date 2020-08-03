import { ValidationBuilder as Builder } from '@/validation/validators/builder/validation-builder'
import { ValidationComposite } from '@/validation/validators'

export const makeSignUpValidation = (): ValidationComposite => {
  const validationComposite = ValidationComposite.build([
    ...Builder.field('name').required().min(5).build(),
    ...Builder.field('email').required().email().build(),
    ...Builder.field('password').required().min(5).build(),
    ...Builder.field('passwordConfirmation').required().sameAs('password').build()
  ])
  return validationComposite
}