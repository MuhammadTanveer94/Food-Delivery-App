function crimeData() {
  return new Promise((resolve, reject) => {
    fetch(`https://data.police.uk/api/crime-categories`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let crimesName = res.map(items => {
            return {
                value:items.url,
                label:items.name
              }
        });
        resolve(crimesName);
      })
      .catch(e => {
        reject({ messege: "something went wrong" });
      });
  });
}

function forceData() {
  return new Promise((resolve, reject) => {
    fetch("https://data.police.uk/api/forces")
      .then(res => res.json())
      .then(res => {
        //   console.log(res)
        let forcesName = res.map(items => {
          return {
              value:items.id,
              label:items.name
            }
        });
        resolve(forcesName);
      })
      .catch(e => {
        reject({ messege: "something went wrong" });
      });
  });
}

function categoryData(crime, force) {
  console.log(crime.value, "======> crime");
  console.log(force.value, "======> force");
  return new Promise((resolve, reject) => {
    // https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire

    if (crime && force) {
        fetch(
            `https://data.police.uk/api/crimes-no-location?category=${crime.value}&force=${force.value}`
          )
            .then(res => res.json())
            .then(res => {
              //   let forcesName = res.map(items => {
              //     return items.name;
              //   });
              //   resolve(forcesName);
              console.log(res)
              resolve(res);
            })
            .catch(e => {
              reject({ messege: "something went wrong" });
            });
    }

  });
}

export { crimeData, forceData, categoryData };

// for returning asynchronous (request/response)
