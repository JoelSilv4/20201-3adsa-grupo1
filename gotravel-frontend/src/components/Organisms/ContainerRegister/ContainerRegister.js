import React from 'react';
import { TitleRegister, ContainerVideo, ContainerDiscription, DiscriptionRegister } from './ContainerRegister.style'
import Button from '../../Atoms/Button'

const ContainerRegister = ({textButton, textColorButton}) => (
    <ContainerVideo>
        <iframe width="560"
            height="315"
            src="https://www.youtube.com/embed/KGlYQ5SoeKE"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="videoGo"
            allowfullscreen>
        </iframe>
        <ContainerDiscription>
            <TitleRegister>Dê um <span>GO</span> e explore!</TitleRegister>
            <DiscriptionRegister>
                Conheça novos lugares e não se preocupe
                tanto com o planejamento da sua viagem! Dê um <span>GO!</span>
            </DiscriptionRegister>
            <Button 
                text={textButton}
                textColor={textColorButton}
            />
        </ContainerDiscription> 
    </ContainerVideo>
)

export default ContainerRegister;