import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like"; 

  //Primera prueba
  test("Muestra por defecto 'Likes: 0'", () => {
    render(<Like />);
    const likesText = screen.getByText(/Likes: 0/i); 
    expect(likesText).toBeInTheDocument();
  });

  //Segunda prueba
  test("Incrementa el número de likes al hacer clic en 'Like'", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like"); 
    fireEvent.click(likeButton); 
    const likesText = screen.getByText(/Likes: 1/i); 
    expect(likesText).toBeInTheDocument(); 
  });

  //Tercera prueba
  test("Decrementa el número de likes al hacer clic en 'Dislike'", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like"); 
    fireEvent.click(likeButton); 
    const dislikeButton = screen.getByText("Dislike"); 
    fireEvent.click(dislikeButton); 
    const likesText = screen.getByText(/Likes: 0/i); 
    expect(likesText).toBeInTheDocument(); 
  });