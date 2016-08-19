'use strict';

angular.module('pbApp', ['ui.knob']).controller('knobCtrl1', function ($scope) {
  var vm = this;

  // Preloading values for mileStones array
  var mileStones = [{
    skin: {
      type: 'tron',
      width: 5,
      spaceWidth: 2
    },
    size: 100,
    unit: '$',
    max: 4000,
    trackWidth: 20,
    barWidth: 20,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    readOnly: false,
    subText: {
      enabled: false,
      text: 'Fundraising'
    },
    step: 10,
    displayPrevious: true,
    value: 350
  },
  {
    skin: {
      type: 'tron',
      width: 5,
      spaceWidth: 2
    },
    size: 100,
    unit: '%',
    max: 100,
    trackWidth: 20,
    barWidth: 20,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    readOnly: false,
    subText: {
      enabled: false,
      text: 'Membership Drive'
    },
    step: 1,
    displayPrevious: true,
    value: 15
  },
  {
    skin: {
      type: 'tron',
      width: 5,
      spaceWidth: 2
    },
    size: 100,
    unit: '',
    max: 1,
    trackWidth: 50,
    barWidth: 50,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    readOnly: false,
    displayInput: false,
    subText: {
      enabled: false,
      text: 'Find Location'
    },
    step: 1,
    displayPrevious: true,
    value: 0
  }];

  vm.mileStones = mileStones;

  vm.phaseOneOptions = {
    skin: {
      type: 'tron'
    },
    size: 300,
    unit: '%',
    barWidth: 40,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    subText: {
      enabled: true,
      text: 'Phase 1'
    },
    scale: {
      enabled: false,
      type: 'lines',
      width: 2
    },
    step: 0.01,
    displayPrevious: true
  }

  // For loop to define milestones and create their knobs
  $scope.$watch(function() {
    vm.phaseOneValue;
    console.log('hi: ', vm.mileStones);
    for (var i = 0; i < vm.mileStones.length; i++) {
      console.log(vm.mileStones[i]);
      // return vm.phaseOneValue;
    }

  });


  // for (var i = 0; i < mileStones.length; i++) {
  //
  //   vm.phaseOneValue = 0;
  //
  //   // console.log(mileStones[i].max);
  //
  //   $scope.$watch(function() {
  //     return vm.phaseOneValue
  //     console.log(mileStones[i].max);
  //   }, function() {
  //     // console.log(vm.mileStones.startValue);
  //     // vm.msPercent = vm.msValue/mileStones[i].max;
  //     // vm.value1 = vm.msPercent*100;
  //     // console.log(vm.msPercent);
  //   });
  //
  //
  // }


})
