import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { toast } from "sonner"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, useSearchParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "@/api/sign-in"

const signInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>
export function SignIn() {
    const  [ searchParams ] = useSearchParams();
    // useSearchParams é um hook do react-router-dom que retorna um array com o objeto URLSearchParams e uma função para atualizar a query string

    
    const {
        register, 
        handleSubmit, 
        formState: { isSubmitting } 
    } = useForm<SignInForm>({
        defaultValues: {
            email: searchParams.get('email') || ''
        }
        // defaultValues é uma propriedade do useForm que permite preencher os campos do formulário com valores padrão (nesse caso, o email passado pela query string do searchParams)
    })

    // toda "mutação" na aplicação (post, put, delete) é um mutation
    const { mutateAsync: authenticate } = useMutation({
        mutationFn: signIn,
        
    })
    // já o get é uma Query


    async function handleSignIn(data: SignInForm) {
        try {
            console.log(data);
            await authenticate({ email: data.email })
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