import BlueButton from "@/components/UI/Buttons/BlueButton";
import React from "react";

export const NonLoggedNavbar = () => {
    return <>
        <BlueButton
            onClick={() => {
                console.log("hello from navbar");
            }}
        >
            Sign in
        </BlueButton>
    </>
}
