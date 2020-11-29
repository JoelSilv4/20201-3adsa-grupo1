import React from 'react';
import { ContainerErro, Title, ImageWrapper } from './Error.style';
import { ReactComponent as Image } from '../../../assets/carro-virado.svg';
import Button from '../../Atoms/Button'

const Error = ({nenhumText, text, buttonText, textCollor}) => (
    <ContainerErro>
        <ImageWrapper>
            <Image />
        </ImageWrapper>
        <Title>
            Oops, parece que você ainda não fez {nenhumText} {text} :C
        </Title>
        <Button textColor={textCollor} text={buttonText} />

    </ContainerErro>

);

export default Error;