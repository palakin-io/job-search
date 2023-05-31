import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { describe, it, expect } from "vitest";

describe("MainNav", () => {
    it("displays company name", () => {
        render(MainNav);
        screen.getByText("Bobo Careers");
        expect("Bobo Careers").toBeInTheDocument();
    });
});