type MethodWithArgs<This, Args extends unknown[], Return> = (this: This, ...args: Args) => Return;

/**
 * Décorateur de méthode qui loggue les appels de la méthode 
 * @returns 
 */
export function log<This, Args extends unknown[], Return>() {
    return function actual(originalMethod: MethodWithArgs<This, Args, Return>,
                           context: ClassMethodDecoratorContext<This, MethodWithArgs<This, Args, Return>>) {
        const methodName = String(context.name);
    
        function replacementMethod(this: This, ...args: Args) {
            console.log(`Méthode ${methodName} appelée avec les arguments ${args}`);
            try {
                return originalMethod.apply(this, args);
            } catch (error) {
                console.error(`Erreur dans la méthode ${methodName} : ${error}`);
            }
        }

        return replacementMethod;
    }                            
}