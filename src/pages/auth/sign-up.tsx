import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { toast } from "sonner"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, useNavigate } from "react-router-dom"

const signUpForm = z.object({
    restaurantName: z.string(),
    menagerName: z.string(),
    phoneNumber:z.string(),
    email: z.string().email(),

})

type SignUpForm = z.infer<typeof signUpForm>
export function SignUp() {
    const navigate = useNavigate()

    const {
        register, 
        handleSubmit, 
        formState: { isSubmitting } 
    } = useForm<SignUpForm>()

    async function handleSignUp(data: SignUpForm) {
        try {
            console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 2000))
            toast.success('Restaurante cadastrado com sucesso', {
                action: {
                    label: 'Login',
                    onClick: () => navigate('/sign-in'),

                }
            })
        }catch(err) {
            console.log(err)
            toast.error('Erro ao criar restaurante')
        }
    }

    return(
        <div>
            <Helmet title="Cadastro"/>
            <div className="p-8">
                <Button asChild className="absolute right-8 top-8" variant={"ghost"}>
                    <Link to={'/sign-in'}>
                        Fazer login
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="font-semibold text 2xl tracking-tight">Criar conta gratis</h1>
                        <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas</p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input id="restaurantName" type="text" {...register("restaurantName")}></Input>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Seu nome</Label>
                            <Input id="name" type="text" {...register("menagerName")}></Input>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input id="email" type="email" {...register("email")}></Input>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input id="phone" type="tel" {...register("phoneNumber")}></Input>
                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>Finalizar Cadastro</Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você concorda com nossos <a className="underline underline-offset-2">termos de serviço</a>{''} e{' '} 
                            <a className="underline underline-offset-2">políticas de privacidade</a>
                        </p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}