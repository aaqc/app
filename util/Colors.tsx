type Color = string;

interface Colors {
    text: Color,
    background: Color,
    success: Color
}

export const DarkColors: Colors = {
    text: "#d3dae3",
    success: "#23d18b",
    background: "#1c1f26",
};

export const LightColors: Colors = {
    text: "#000",
    success: "#6ae1a8",
    background: "#fff",
};
