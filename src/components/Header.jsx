import React from "react";
import { Button, HeaderContainer } from "../styles/Header.styles";
import { Formik, Form, Field } from "formik";
import { Card, Stack } from "../styles/UI.styles";
import { useRecipe } from "../context/Recipe";
import { MdSearch } from "react-icons/md";

export default function Header() {
  const { mealTypes , getData, recipies} = useRecipe();

  const initialValues = {quey:'', meal:mealTypes[0].toLocaleLowerCase()}

  const submitHandler = (values)=>{
    const {query, meal} = values;
    getData(query, meal)
    console.log(recipies)
  }  
  return (
    <HeaderContainer>
      <h2 className="text-secondary">RecipE App</h2>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <Card bg="#efefef" style={{ padding: "1rem" }} shadow>
            <Stack gap="1rem" className="form-fields">
              <Field
                type="search"
                placeholder="Pizza"
                autocomplete="off"
                name="query"
                style={{ flex: 1 }}
              />
              <Field as="select" name="meal">
                {mealTypes.map((meal, index) => (
                  <option key={index} value={meal.toLowerCase()}>
                    {meal}
                  </option>
                ))}
              </Field>

              <Button>
                <Stack gap="0.5rem" align="center" justify="center">
                  <MdSearch className="searchIcon" />
                  <span>Search</span>
                </Stack>
              </Button>
            </Stack>
          </Card>
        </Form>
      </Formik>
    </HeaderContainer>
  );
}
