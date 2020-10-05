import React from 'react';
import { ContainerTitle, Title, TitleWrapper } from './ContainerTop.style'
import Button from '../../Atoms/Button'
import { ReactComponent as Image } from '../../assets/mala-viagem.svg'

const ContainerTop = ({textButton, textColorButton}) => (
    <ContainerTitle>
        <TitleWrapper>
            <Title>Preocupe-se menos com
                    o planejamento de suas viagens e curta mais <br />
                    Dê um <span>GO!</span>
            </Title>
            <Button 
            text={textButton}
            textColor={textColorButton}
            />
        </TitleWrapper>
        <Image />
    </ContainerTitle>
    
)

export default ContainerTop;
