import React from "react";
import { render, screen } from "@testing-library/react";
import FormBox from "../components/formBox/FormBox";
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe("FormBox", () => {
    test("renders the Rating component", () => {
        render(<FormBox formTitle="User Information"
            fieldName={[{ label: "User Name", relatedKey: "userName",  displayFormat: "text" }, { label: "User Id", relatedKey: "userId" ,  displayFormat: "text"}, { label: "Password", relatedKey: "password", displayFormat: "text"}]}
            data={{
                userName:"Amy",
                userId:"1231",
                password: "123"
            }}
        />);

        const formtitle = screen.getByText("User Information");
        expect(formtitle).toBeInTheDocument();
    });
});