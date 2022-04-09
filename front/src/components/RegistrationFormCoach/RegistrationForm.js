import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function RegistrationForm(props) {
  return(
       <>
            <Form className="form">
                <FormGroup>
                    <Label>Nom</Label>
                    <Input type="text" 
                        id="nom" 
                        placeholder="Nom"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Prénom</Label>
                    <Input type="text" 
                        id="prenom" 
                        placeholder="prénom"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Date de naissance</Label>
                    <Input type="date" 
                        id="dateNaissance" 
                        placeholder="date de naissance"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Adresse Email</Label>
                    <Input type="email" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Mot de passe</Label>
                    <Input type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </FormGroup>
                <Button 
                    type="submit" 
                >
                    S'inscrire
                </Button>
            </Form>
       </>
    )
}
