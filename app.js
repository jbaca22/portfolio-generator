// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
    console.log('================');

    profileDataArr.forEach(function(profileItem) {
    console.log(profileItem);
    });
  };

