import React from 'react'
import Header from '../components/Header'
import { HomeContainer, StyledCard } from '../styles/Home.styles'
import { Container, Stack } from '../styles/UI.styles'
import { useRecipe } from '../context/Recipe'
import { Link } from 'react-router-dom'

export default function Home() {

  const {recipes }= useRecipe()
  return (
    <HomeContainer>
      <Container>

        <Header/>

        <Stack gap="1rem" justify="center">
          {recipes.map((r, index)=>(
            <StyledCard key={index} bg="#efefef" shadow title={r.recipe.title}>
              <h5> {r.recipe.label}</h5>
              <Link to="details" state={{r}}>
                  <img src={r.recipe.image} alt={r.recipe.title}/>
              </Link>

            </StyledCard>
          ))}
        </Stack>

      </Container>

    </HomeContainer>
  )
}
