import React from 'react';
import { BackgroundImage, Title } from './ContainerImageBackground.style'

const ContainerImageBackground = ({title, image, fontColor }) => (
    <BackgroundImage img={image}>
        <Title color={fontColor}>{title}</Title>
    </BackgroundImage>
)

export default ContainerImageBackground;
