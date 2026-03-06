import { BurgerMenuProvider } from './BurgerMenuContext'
import { FirstInteractionProvider } from './FirstInteractionContext'

const combineComponents = (...components) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        )
      }
    },
    ({ children }) => <>{children}</>
  )
}

const providers = [FirstInteractionProvider, BurgerMenuProvider]

export const AppContextProvider = combineComponents(...providers)
