// Abstract Product - Button
class Button {
  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

// Concrete Product - DarkButton
class DarkButton extends Button {
  render() {
    return "Rendering a dark button.";
  }
}

// Concrete Product - LightButton
class LightButton extends Button {
  render() {
    return "Rendering a light button.";
  }
}

// Abstract Product - Checkbox
class Checkbox {
  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

// Concrete Product - DarkCheckbox
class DarkCheckbox extends Checkbox {
  render() {
    return "Rendering a dark checkbox.";
  }
}

// Concrete Product - LightCheckbox
class LightCheckbox extends Checkbox {
  render() {
    return "Rendering a light checkbox.";
  }
}

// Abstract Factory
class ThemeFactory {
  createButton() {
    throw new Error("Method 'createButton()' must be implemented.");
  }

  createCheckbox() {
    throw new Error("Method 'createCheckbox()' must be implemented.");
  }
}

// Concrete Factory - DarkThemeFactory
class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }

  createCheckbox() {
    return new DarkCheckbox();
  }
}

// Concrete Factory - LightThemeFactory
class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }

  createCheckbox() {
    return new LightCheckbox();
  }
}

// Client Code
function renderUI(themeFactory) {
  const button = themeFactory.createButton();
  const checkbox = themeFactory.createCheckbox();

  console.log(button.render());
  console.log(checkbox.render());
}

// Usage
const darkThemeFactory = new DarkThemeFactory();
renderUI(darkThemeFactory);
// Output:
// Rendering a dark button.
// Rendering a dark checkbox.

const lightThemeFactory = new LightThemeFactory();
renderUI(lightThemeFactory);
// Output:
// Rendering a light button.
// Rendering a light checkbox.
