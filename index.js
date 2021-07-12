const express = require('express')
const fs = require('fs')

const app = express();
app.use(express())

app.use(express.json())
const port = process.env.port  || 5000;


app.get("/", (req, res) => {
    fs.readdir("C:\\Users\\VISHNUPRASAD\\Desktop\\Repo\\Node.js", (err, data) => {
      if (err) throw err;
      else {
        res.send(
          data.map((filesAndFolder) => {
              return filesAndFolder.includes(".")
                ? `<img style="width:20px;height:20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEXZ5Oj///8UHzh509O9yc0AACng7O9XX2wGFjIAACXd6Oy8xssOGzUwOEumsLanqa4AEC+1wcXP2991fYcAAB4NEjB0yst82dhDdH0AAB0AACQAACGWmaHD0NNMVWMABCqcn6cAABeeqLCRm6RRjZRNhY19h5IAFDHa295CSFmwsrjj5OZKf4hotbg3QFK2uL7NztJTWGckLkRmbnogNEhWlpw3X2soMUZsvb8yVWMXJT6GkJl6hI5rcHvDxMnx8vO+1sl9AAAHa0lEQVR4nO3dbWOaOhQHcKGASKlS1OuUIj7s2mo7W+u2u9v1rt//W811a3mwIQmekGPv+b/eJr+dkAQSoGGI5+mus9is700FSSYSxyGXhjBvMrZHSeD6KoCmGV1oFt41p7arxvYnPVVEIeH1pneplKeSKCJcTNX71BH5wqsHuw6fMiJXuOop6lvqIvKEk2FtPkVEjvCiVqCSQaNc2KkZaJpDcGKp8G5aPAA3sJMWbAr9NHgVy4RPdr6T8W17vJidn4LG2haI0OdimXCZ+22/tZ6EjgcdpxuYSoklwlWU/d3gvu14Dfh4e0JgIlv4FGTb6GjrqfC9KYQlsoUX2alMNHeU+N4WghLZwlamhNFMFfBtISSRKexkStj6rgzIEAIOGkzhWVpCd6wOyBLCDf0s4XVmNhOFajqZUiFYQ2UJJ8nrTwWPCkvIFkIRWcJNes/CVlnCnPBzXwGRJUwHQ7epsoRZYf/mywieyBBep/MZe6ayhDnhh8HHFjiRIfyR/mcq7WeKwsHHCJrIEK5eR0PfVdpIC8IT+CoyhJNUuKxVeAJeRa7Q3dQr3KvioUM/Q5jO2RR3pfvCHRG0R0UoBK4iRiFsd4NSCNpQcQohq4hUCDhoYBWeDP4G6m7QCsHORbxCqEEDsRCoipiFMFVELdzrbqpUEbcQgohcCEDELtwRD+xu0At3xCRHlO1u8AsPreIRCA+cwOkXPqbCr28LD+tutAudxavQ/8wQHlRF7UJvnnYkPgN4UBX1C9vpQqX9iVXEA4j6hVbaU/ZvmMK9QUOYqF3YCP/JLKezhZUHDQTCzJYh+0sZ8abS0I9AOE9PRP+eDaxaRf3C2MrsjmcN+m+fi0JVRCCMt5l17hG7O31uqPI9KgKh1c5Wpv+tnFioIv85DQzCeJx50MHvc6pYGDS4RP3C0LLa2bbnl3aoew2VW0UUwtyZuBsz/v02KBn6JRsqCqF16uf26rr210+DAUs5uMk/HsFpqPqFjZ0wnuVHOrNvP3z48unbX2/m5EN+3015FXEIrbhbfGzF7yc2a2t4v/BnS6uIQBg/E5uszV8imZYQEQh/nYg74vIQYkkVEQifm+ku46TMwAn7XEQg9OLfwrh5yCNkzCoiEP5ppjviwj7gKbLpLV5hI34httfVjXYHsfCliDvjdzeoaEQtfDkTfxGtx4dqTxyjFr52p7+N82ZiB64vWUvkwtDKJo7bj821GQg8JucfizDTTl+QsXV6zo019o9EmGunEslcPKMXViMelbAS8biEjeK5+P6EFYjHJvRCvum4hQ3pMh6h0JMzHqFQ0niUwmdkKKg8VuGfhPw0NkctFIjTJCEJSag7JCQhCfWHhCQkof6QkIQk1B8SkpCE+kNCEpJQf0hIQhLqDwlJSMI0nucIBP6F2bUJHat7JpCuBd0e6hI6i2HgCyQYQr9UuiahN8+/eawkvTlsQ61JGEpsPw9AgTUJvZnEcxKtNmgRaxLOJR52SWCbKQmBhKfCHY1pRqdHKGw4S+FvegXAr+iva7SIA8En6wIX+NXZdY34XtjsJTY3SbSFfjd4bbM2zwvbAgnBJ/F1XluIfBcI2kdXTyQkIYaQkIQk1B9sI75UcAkFZ21SCUU+RljjzDsSmHlLJYmaAtN0dFdPUgkCPhHfFbBULvmXywjvYkiFf8sD4Z0oqfBvW5EQSDhTJeTfPq5rtEjUfH7d5y8B4FuZkUqP/wFbbKtrUgmGC4FfRrZCKpN191Tkh5GtcktFaO5NV08kJKH+kJCEJNQfEsIJ3/2cRsG8VGybH11bAAlVXR9G/N1Fx36NnyCpobr7NAmS+zT/g3tt71/47u95N5zxO1+3aHjhpZK1p0s0a0/vf/1Q0RqwyMSU1vEhhXpCQhKSUH9ISEIS6g8JSUhC/SEhCUmoPyQkIQn1B0QI/Hw5bJzK3yhZvQr9NWrhOv2y3EpKeJt+3jtBLUxfOtK6lRJepctJUazgGWygeHHmOK+khE9pDe0ZYmFm+bn1JCU00m9kuhu8zTTT0fgmQ8ISbtMlQRttM/Xi9DQM/pMUdjJ/t4u1iE43XbdMGF0pU3g9fP27aPsaL+6lB9ljnIZMobFMP8qLddB3csfIgjCFq7Q3NVvQr1kDibPIvIFrxBgNS4RGdgtJNMNHdGaZLSC+y3SwhZPsO8oi/iNINcf5nt3j0mJMSkuFRu6z0aOtitfLVI7X2GbOItN/YDNKhLe5jUDBfVvk8fFa4jnth9z+luGPSkJjnPtX/NZ6FjrgGxLk44Tzs1ZuN2TQLFGUCZ8Kuyp92x4vZuenOnM+Wyzt4nGZrLGQJzTupmYhbmDzv3euNHbgFg9qyLiqEBAanWHxX0OYKXMoFBAaF/iJU/ZAISI0JsiJPg/IFRqrnppN3DBxRyXjhKDQuHqQeAFrzUnOrrnHzxcaxmK6132hyOXwQuDoRYTG1binZhfwIQl6TX4BRYW7kXEztREV0nft6bZ0FJQW7iY4k6U9SgJfd7/ju0ESJZtO2TSmmvAX8m7yuFnfawXer5uLzp3EQRs/ATcLeYfVp/r4AAAAAElFTkSuQmCC" alt="File"/>&nbsp<span>${filesAndFolder}<span>`
                : `<div style="display:flex;align-items:center"><img style="width:30px;height:30px" src="data:image/jpeg;base64,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" alt="Folder"/>&nbsp<span>${filesAndFolder}</span></div>`;
            })
            .join(" ")
        );
      }
    });
  });



app.listen(port, () => console.log("Your app runs with" + " " + port))    
