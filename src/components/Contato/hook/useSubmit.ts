import { toast } from 'react-hot-toast';

export const useSubimit = () => {

    const submitEmail = async (e: any) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/gabriel.lopes.gal@gmail.com", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: data,
            });

            if (response.ok) {
                toast.success("Mensagem enviada com sucesso!", {
                    style: {
                        borderRadius: '10px',
                        background: '#37904c',
                        color: '#fff',
                        fontSize: "16px"
                    }
                });
                form.reset();
            } else {
                toast.error("Erro ao enviar. Tente novamente.", {
                    style: {
                        borderRadius: '10px',
                        background: '#903737',
                        color: '#fff',
                        fontSize: "16px"
                    }
                });
            }
        } catch (error) {
            toast.error("Erro ao enviar. Verifique sua conexão.", {
                style: {
                    borderRadius: '10px',
                    background: '#903737',
                    color: '#fff',
                    fontSize: "16px"
                }
            });
        }
    }

    return { submitEmail }
}


