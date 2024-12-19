import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { toast } from "sonner"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from "react-router-dom"

const signInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>
export function SignIn() {


    const {
        register, 
        handleSubmit, 
        formState: { isSubmitting } 
    } = useForm<SignInForm>()

    async function handleSignIn(data: SignInForm) {
        try {
            console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 2000))
            toast.success('Enviamos um link de authenticação para seu email', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSignIn(data),

                }
            })
        }catch(err) {
            console.log(err)
            toast.error('Credenciais inválidas')
        }
    }

    return(
        <div>
            <Helmet title="Login"/>
            <div className="p-8">
                <Button asChild className="absolute right-8 top-8" variant={"ghost"}>
                    <Link to={'/sign-up'}>
                        Novo estabelecimento
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="font-semibold text 2xl tracking-tight">Acessar painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input id="email" type="email" {...register("email")}></Input>
                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>Acessar painel</Button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}