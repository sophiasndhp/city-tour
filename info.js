(async () => {
        const response = await fetch(
          'https://parseapi.back4app.com/classes/Continentscountriescities_City/app1?excludeKeys=cityId,adminCode',
          {
            headers: {
              'X-Parse-Application-Id': 'VvvMXYLUmYgSdMEoMymeWa0PlRxFtF0gbQLusWgt', // This is your app's application id
              'X-Parse-REST-API-Key': 'Ey3Nflv52dF4BLcfnq9n5W4e0mlPJEYLn5WgKCIt', // This is your app's REST API key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        console.log(JSON.stringify(data, null, 2));
      })();
      