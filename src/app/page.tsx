function HomePage(){
  return (
    <div>
      <h1>Hello, from Awais.!</h1>
    </div>
  )
};

function Age(){
  let age = 18;
  return (
    <h1>I'm {age} years old.!</h1>
  )
};

export default HomePage;
// export default Age;       // Just One function can be exported default at one time.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.

// Panaverse: step00_helloworld. 

//  1...step00_helloworld/app/page.tsx
function Home(){
  return (
    <div>Hello from Zia</div>
  )
};

// 2...step00_helloworld/app/layout.tsx   === By_default.
// 3...step00_helloworld/app/globals.css  === Empty.