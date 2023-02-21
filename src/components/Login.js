import React, { useRef } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100" type='submit'>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>Don't have an account? Sign Up</div>
        </>
    )
}

export default Signup