import React from "react";
import Image from "next/image";
import express from '../Assets/express.png'



function Skills() {

 const Languages=[
    {
        name:"C",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        name:"C++",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
        name:"Java",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        name:"Python",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    }
 ]


 const Web=[
    {
        name:"Next",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
        name:"React",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        name:"Tailwind",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name:"Typescript",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    }
 ]


 const Backend=[
    {
        name:"Node",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
        darkLogo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
    },
    {
        name:"Express",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
        darkLogo:express
    },
    {
        name:"Prisma",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
        darkLogo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
    },
    {
        name:"Javascript",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        darkLogo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    }
 ]



const db=[
    {
        name:"MongoDb",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
    },
    {
        name:"Mysql",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg"
    },
    {
        name:"Postgres",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg"
    },
    {
        name:"Redis",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
    }
]

const Tools=[
    {
        name:"Git",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        name:"Redux",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
    },
    {
        name:"Postman",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
        name:"Linux",
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    }
]


  return (
    <>
     <h1 className="text-center mt-[30vh] sm:mt-[20vh] font-title text-6xl mb-10 sm:text-3xl scroll-smooth" id="skills">Technologies</h1>



    <div className="w-full px-[46vh] md:px-[8vh] lg:px-[6vh] sm:px-[3vh] sm:mt-[-4vh] sm:pt-4">

  <div className="grid grid-cols-4 place-items-center gap-7  py-10 w-[100%]  sm:grid-cols-2  sm:mb-0 ">
    {Languages.map((item, idx) => {
      const randomDelay = Math.random() * 2 + 's';
      const randomDuration = Math.random() * 3 + 2 + 's';

      return (
        <div
          key={idx}
          className="w-[100%] p-3 shadow-xl rounded-xl border-2 animate-up-down sm:p-2 dark:border-none dark:shadow-zinc-800 dark:shadow-md "
          style={{
            animationDelay: randomDelay,
            animationDuration: randomDuration,
          }}
        >
          <Image src={item.logo} alt=""  width={100} height={100} className="w-full"/>
        </div>
      );
    })}

          
  </div>

  {/* Web Section */}
  <div className="grid grid-cols-4 sm:mb-0 place-items-center gap-7  py-10 w-[100%]  sm:grid-cols-2">
    {Web.map((item, idx) => {
      const randomDelay = Math.random() * 2 + 's';
      const randomDuration = Math.random() * 3 + 2 + 's';

      return (
        <div
          key={idx}
          className="w-[100%] p-3 shadow-xl  rounded-xl border-2 animate-up-down sm:p-2 dark:shadow-zinc-800 dark:shadow-md dark:border-none "
          style={{
            animationDelay: randomDelay,
            animationDuration: randomDuration,
          }}
        >
          <Image src={item.logo} alt="" className="w-full dark:shadow-slate-500"  width={100} height={100}/>
        </div>
      );
    })}
  </div>

  {/* Backend Section */}
  <div className="grid grid-cols-4 sm:mb-0 place-items-center gap-7  py-10 w-[100%]  sm:grid-cols-2 ">
    {Backend.map((item, idx) => {
      const randomDelay = Math.random() * 2 + 's';
      const randomDuration = Math.random() * 3 + 2 + 's';

      return (
        <div
          key={idx}
          className="w-[100%] p-3 shadow-xl rounded-xl border-2 animate-up-down sm:p-2 dark:shadow-zinc-800 dark:shadow-md dark:border-none "
          style={{
            animationDelay: randomDelay,
            animationDuration: randomDuration,
          }}
        >

          <Image
          src={item.logo}
          alt={item.name}
          className="w-full dark:hidden "
          width={1000} height={1000}/>
         <Image src={item.darkLogo} alt="" className="dark:block hidden" width={1000} height={1000} />

        </div>
      );
    })}
  </div>

  {/* Databases Section */}
  <div className="grid grid-cols-4 sm:mb-0 place-items-center gap-7 py-10 w-[100%]  sm:grid-cols-2 ">
    {db.map((item, idx) => {
      const randomDelay = Math.random() * 2 + 's';
      const randomDuration = Math.random() * 3 + 2 + 's';

      return (
        <div
          key={idx}
          className="w-[100%] p-3 shadow-xl rounded-xl border-2 animate-up-down sm:p-2 dark:shadow-zinc-800 dark:shadow-md dark:border-none "
          style={{
            animationDelay: randomDelay,
            animationDuration: randomDuration,
          }}
        >
          <Image src={item.logo} alt="" className="w-full"  width={100} height={100}/>
        </div>
      );
    })}
  </div>

  {/* Tools Section */}
  <div className="grid grid-cols-4 sm:mb-0 place-items-center gap-7  py-10 w-[100%]  sm:grid-cols-2 ">
    {Tools.map((item, idx) => {
      const randomDelay = Math.random() * 2 + 's';
      const randomDuration = Math.random() * 3 + 2 + 's';

      return (
        <div
          key={idx}
          className="w-[100%] p-3 shadow-xl rounded-xl border-2 animate-up-down sm:p-2 dark:shadow-zinc-800 dark:shadow-md dark:border-none "
          style={{
            animationDelay: randomDelay,
            animationDuration: randomDuration,
          }}
        >
          <Image src={item.logo} alt="" className="w-full" width={100} height={100} />
        </div>
      );
    })}
  </div>
</div>


   
    {/* </BackgroundBeamsWithCollision> */}










    </>
  );
}

export default Skills;
