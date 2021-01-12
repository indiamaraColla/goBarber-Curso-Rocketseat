import React, { useCallback, useRef, useContext } from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../context/AuthContext';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button/index';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useContext(AuthContext);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
                password: Yup.string().required('Senha obrigatoria')
            });
            await schema.validate(data, { abortEarly: false, });
            signIn();
        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, [signIn])

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit} >
                    <h1>Faça seu Logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" />

                    <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

                    <Button type="submit" >Entrar</Button>

                    <a href="forgot">
                        Esqueci minha senha
                    </a>
                </Form>
                <a href="login">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />

        </Container>
    )
}

export default SignIn;
