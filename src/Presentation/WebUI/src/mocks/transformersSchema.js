export default {
  '$schema': 'http://json-schema.org/schema',
  'id': '9238dd20-2e34-11ec-830d-3b564b5fb0df',
  '$id': 'PowerTransformer',
  '$comment': 'This is the core data structure of any power transformer. Carlos Gamez - 13/Sep/2021',
  'title': 'Power Transformer',
  'definitions': {
    'Component': {
      '$id': 'Component',
      'type': 'object',
      'properties': {
        'Manufacturer': {
          '$id': 'definitions/Component/properties/Manufacturer',
          'type': 'string'
        },
        'Model': {
          '$id': 'definitions/Component/properties/Location',
          'type': [
            'string',
            'number'
          ]
        },
        'SerialNumber': {
          '$id': 'definitions/Component/properties/SerialNumber',
          'type': 'string'
        },
        'YearOfManufacture': {
          '$id': 'definitions/Component/properties/YearOfManufacture',
          'type': 'integer'
        },
        'Description': {
          '$id': 'definitions/Component/properties/Description',
          'type': 'string'
        }
      },
      'required': [
        'Manufacturer'
      ]
    },
    'Temperature': {
      '$id': 'Temperature',
      'type': 'object',
      'properties': {
        'Value': {
          '$id': 'definitions/Temperature/properties/Value',
          'type': 'number'
        },
        'Unit': {
          '$id': 'definitions/Temperature/properties/Unit',
          'type': 'string',
          'enum': [
            '°C',
            'degC',
            'oC',
            '°K',
            'degK',
            'oK',
            'K'
          ]
        }
      }
    },
    'Voltage': {
      '$id': 'Voltage',
      'type': 'object',
      'properties': {
        'Value': {
          '$id': 'definitions/Voltage/properties/Value',
          'type': 'number'
        },
        'Unit': {
          '$id': 'definitions/Voltage/properties/Unit',
          'type': 'string',
          'enum': [
            'V',
            'kV'
          ]
        }
      }
    },
    'Current': {
      '$id': 'Current',
      'type': 'object',
      'properties': {
        'Value': {
          '$id': 'definitions/Current/properties/Value',
          'type': 'number'
        },
        'Unit': {
          '$id': 'definitions/Current/properties/Unit',
          'type': 'string',
          'enum': [
            'mA',
            'A',
            'kA'
          ]
        }
      }
    },
    'Resistance': {
      '$id': 'Resistance',
      'type': 'object',
      'properties': {
        'Value': {
          '$id': 'definitions/Resistance/properties/Value',
          'type': 'number'
        },
        'Unit': {
          '$id': 'definitions/Resistance/properties/Unit',
          'type': 'string',
          'enum': [
            'miliOhm',
            'Ohm',
            'kiloOhm',
            'MegaOhm',
            'GigaOhm',
            'TeraOhm'
          ]
        }
      }
    },
    'Weight': {
      '$id': 'Weight',
      'type': 'object',
      'properties': {
        'Value': {
          '$id': 'definitions/Weight/properties/Value',
          'type': 'number'
        },
        'Unit': {
          '$id': 'definitions/Weight/properties/Unit',
          'type': 'string',
          'enum': [
            'kg',
            'lb',
            'tonne',
            'ton'
          ]
        }
      }
    },
    'Volume': {
      '$id': 'Volume',
      'type': 'object',
      'properties': {
        'Value': {
          '$id': 'definitions/Volume/properties/Value',
          'type': 'number'
        },
        'Unit': {
          '$id': 'definitions/Volume/properties/Unit',
          'type': 'string',
          'enum': [
            'l',
            'gal',
            'm^3',
            'ft^3'
          ]
        }
      }
    },
    'Phase': {
      '$id': 'Phase',
      'type': [
        'string',
        'number'
      ],
      'enum': [
        'A',
        'B',
        'C',
        1,
        2,
        3,
        'Red',
        'White',
        'Yellow',
        'Blue'
      ]
    },
    'Side': {
      '$id': 'Side',
      'type': 'string',
      'enum': [
        'Primary',
        'Secondary',
        'Tertiary'
      ]
    }
  },
  'type': 'object',
  'properties': {
    'UniqueIdentifier': {
      '$id': '/properties/UniqueIdentifier',
      'type': [
        'string',
        'number'
      ]
    },
    'Criticality': {
      '$id': '/properties/Critiality',
      'type': 'number',
      'minimum': 0,
      'maximum': 1
    },
    'Descriptors': {
      '$id': '/properties/Descriptors',
      '$comment': 'A Descriptor defines what the Asset is and do not change with condition or ageing. Examples of Descriptors are: Serial Number, Asset Class, Manufacturer, Year of Manufacture, Weight, Volume, Voltage, etc.',
      'type': 'object',
      'properties': {
        'Manufacturer': {
          '$id': '/properties/Descriptors/properties/Manufacturer',
          'type': 'string'
        },
        'SerialNumber': {
          '$id': '/properties/Descriptors/properties/SerialNumber',
          'type': 'string'
        },
        'LocationHistory': {
          '$id': '/properties/Descriptors/properties/LocationHistory',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/LocationHistory/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/Descriptors/properties/LocationHistory/items/Date',
                'type': 'string'
              },
              'Location': {
                '$id': '/properties/Descriptors/properties/LocationHistory/items/Location',
                'type': 'string'
              }
            }
          }
        },
        'YearOfManufacture': {
          '$id': '/properties/Descriptors/properties/YearOfManufacture',
          'type': 'integer'
        },
        'Frequency': {
          '$id': '/properties/Descriptors/properties/Frequency',
          'type': 'integer',
          'enum': [
            50,
            60
          ]
        },
        'Phases': {
          '$id': '/properties/Descriptors/properties/Phases',
          'type': 'integer',
          'enum': [
            1,
            3
          ]
        },
        'ConnectionGroup': {
          '$id': '/properties/Descriptors/properties/ConnectionGroup',
          'type': 'string'
        },
        'LiquidPreservationSystem': {
          '$id': '/properties/Descriptors/properties/LiquidPreservationSystem',
          'type': 'string'
        },
        'LiquidType': {
          '$id': '/properties/Descriptors/properties/LiquidType',
          'type': 'string'
        },
        'BundingHistory': {
          '$id': '/properties/Descriptors/properties/BundingHistory',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/BundingHistory/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/Descriptors/properties/BundingHistory/items/Date',
                'type': 'string'
              },
              'HasBunding': {
                '$id': '/properties/Descriptors/properties/BundingHistory/items/HasBunding',
                'type': 'boolean'
              }
            }
          }
        },
        'NoiseEnclosureHistory': {
          '$id': '/properties/Descriptors/properties/NoiseEnclosureHistory',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/NoiseEnclosureHistory/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/Descriptors/properties/NoiseEnclosureHistory/items/Date',
                'type': 'string'
              },
              'HasBunding': {
                '$id': '/properties/Descriptors/properties/NoiseEnclosureHistory/items/HasNoiseEnclosure',
                'type': 'boolean'
              }
            }
          }
        },
        'ImpactsStandardServiceBenchmarks': {
          '$id': '/properties/Descriptors/properties/ImpactsStandardServiceBenchmarks',
          'type': 'boolean'
        },
        'Components': {
          '$id': '/properties/Descriptors/properties/Components',
          'type': 'array',
          'items': {
            '$ref': '#/definitions/Component'
          }
        },
        'Ratings': {
          '$id': '/properties/Descriptors/properties/Ratings',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/Ratings/items',
            'title': 'Rating',
            'type': 'object',
            'properties': {
              'Power': {
                '$id': '/properties/Descriptors/properties/Ratings/items/properties/Power',
                'type': 'number'
              },
              'PowerUnit': {
                '$id': '/properties/Descriptors/properties/Ratings/items/properties/PowerUnit',
                'type': 'string',
                'enum': [
                  'VA',
                  'kVA',
                  'MVA'
                ]
              },
              'CoolingStage': {
                '$id': '/properties/Descriptors/properties/Ratings/items/properties/CoolingStage',
                'type': 'string',
                'enum': [
                  'ONAN',
                  'ONAF',
                  'OFAN',
                  'ODAN',
                  'OFAF',
                  'ODAF',
                  'ONWN',
                  'ONWF',
                  'OFWN',
                  'ODWN',
                  'OFWF',
                  'ODWF',
                  'KNAN',
                  'KNAF',
                  'KFAN',
                  'KDAN',
                  'KFAF',
                  'KDAF',
                  'KNWN',
                  'KNWF',
                  'KFWN',
                  'KDWN',
                  'KFWF',
                  'KDWF'
                ]
              },
              'WindingTemperatureRise': {
                '$id': '/properties/Descriptors/properties/Ratings/items/properties/WindingTemperatureRise',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Component'
                  },
                  {
                    '$ref': '#/definitions/Temperature'
                  }
                ]
              },
              'OilTemperatureRise': {
                '$id': '/properties/Descriptors/properties/Ratings/items/properties/OilTemperatureRise',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Temperature'
                  }
                ]
              }
            }
          }
        },
        'Voltages': {
          '$id': '/properties/Descriptors/properties/Voltages',
          'type': 'array',
          'minItems': 2,
          'maxItems': 3,
          'items': {
            '$id': '/properties/Descriptors/properties/Voltages/items',
            'title': 'Voltage',
            'type': 'object',
            'properties': {
              'Side': {
                '$id': '/properties/Descriptors/properties/Voltages/items/properties/Side',
                'allOf': [
                  {
                    '$ref': '#/definitions/Side'
                  }
                ]
              },
              'Voltage': {
                '$id': '/properties/Descriptors/properties/Voltages/items/properties/Voltage',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  }
                ]
              },
              'HasTapChanger': {
                '$id': '/properties/Descriptors/properties/Voltages/items/properties/HasTapChanger',
                'type': 'boolean'
              },
              'TapChanger': {
                '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Component'
                  },
                  {
                    'properties': {
                      'NumberOfTaps': {
                        '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger/properties/NumberOfTaps',
                        'type': 'integer'
                      },
                      'MinimumTap': {
                        '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger/properties/MinimumTap',
                        'type': 'integer'
                      },
                      'NominalTap': {
                        '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger/properties/NominalTap',
                        'type': 'integer'
                      },
                      'MaximumTap': {
                        '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger/properties/MaximumTap',
                        'type': 'integer'
                      },
                      'TapVoltageDifference': {
                        '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger/properties/TapVoltageDifference',
                        'type': 'number'
                      },
                      'TapVoltageDifferenceType': {
                        '$id': '/properties/Descriptors/properties/Voltages/items/properties/TapChanger/properties/TapVoltageDifferenceType',
                        'type': 'string',
                        'enum': [
                          'Volts',
                          'Percentage'
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        'WeightsAndVolumes': {
          '$id': '/properties/Descriptors/properties/WeightsAndVolumes',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/WeightsAndVolumes/items',
            'type': 'object',
            'allOf': [
              {
                '$ref': '#/definitions/Component'
              },
              {
                '$ref': '#/definitions/Weight'
              },
              {
                '$ref': '#/definitions/Volume'
              },
              {
                'properties': {
                  'Quantity': {
                    '$id': '/properties/Descriptors/properties/WeightsAndVolumes/items/properties/Weight',
                    'type': 'number'
                  }
                }
              }
            ]
          }
        },
        'OnlineMonitoringDevices': {
          '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items',
            'type': 'object',
            'allOf': [
              {
                '$ref': '#/definitions/Component'
              },
              {
                'properties': {
                  'DeviceName': {
                    '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/DeviceName',
                    'type': 'string'
                  },
                  'DeviceDescription': {
                    '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/DeviceDescription',
                    'type': 'string'
                  },
                  'Function': {
                    '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/Function',
                    '$comment': 'This property is used to describe the primary function that the monitor performs, i.e. measuring PD, DGA, timing, etc.',
                    'type': 'string'
                  },
                  'MacAddress': {
                    '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/MacAddress',
                    'type': 'string'
                  },
                  'IPAddress': {
                    '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/IPAddress',
                    'type': 'string'
                  },
                  'Settings': {
                    '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/Settings',
                    '$comment': 'A collection of key-value pairs that represent the various setting in this device',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/Settings/items',
                      'type': 'object',
                      'properties': {
                        'Key': {
                          '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/Settings/items/properties/Key',
                          'type': [
                            'number',
                            'string'
                          ]
                        },
                        'Value': {
                          '$id': '/properties/Descriptors/properties/OnlineMonitoringDevices/items/properties/Settings/items/properties/Value',
                          'type': [
                            'null',
                            'string',
                            'number',
                            'object',
                            'array'
                          ]
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        },
        'Standards': {
          '$id': '/properties/Descriptors/properties/Standards',
          '$comment': 'This is a list of all the Standards (international or AS) that are applicable to any element of the lifecycle of this asset',
          'type': 'object',
          'properties': {
            'Designation': {
              '$id': '/properties/Descriptors/properties/Standards/properties/Designation',
              '$comment': 'This is the number by which the issuing organisation recognises this standard (i.e. AS 60076-1)',
              'type': 'string'
            },
            'Revision': {
              '$id': '/properties/Descriptors/properties/Standards/properties/Revision',
              'type': [
                'number',
                'string'
              ]
            },
            'Title': {
              '$id': '/properties/Descriptors/properties/Standards/properties/Title',
              'type': 'string'
            },
            'YearOfPublication': {
              '$id': '/properties/Descriptors/properties/Standards/properties/YearOfPublication',
              'type': 'integer'
            },
            'Comments': {
              '$id': '/properties/Descriptors/properties/Standards/properties/Comments',
              'type': 'string'
            }
          }
        },
        'Documents': {
          '$id': '/properties/Descriptors/properties/Documents',
          'type': 'array',
          'items': {
            '$id': '/properties/Descriptors/properties/Documents/items',
            'type': 'object',
            'properties': {
              'Title': {
                '$id': '/properties/Descriptors/properties/Documents/items/properties/Title',
                'type': 'string'
              },
              'Number': {
                '$id': '/properties/Descriptors/properties/Documents/items/properties/Number',
                'type': [
                  'string',
                  'number'
                ]
              },
              'Path': {
                '$id': '/properties/Descriptors/properties/Documents/items/properties/Path',
                '$comment': 'The path to the file that contains the document, including the file name',
                'type': 'string'
              },
              'LastModifiedDate': {
                '$id': '/properties/Descriptors/properties/Documents/items/properties/LastModifiedDate',
                'type': 'string'
              },
              'LastModifiedBy': {
                '$id': '/properties/Descriptors/properties/Documents/items/properties/LastModifiedBy',
                'type': 'string'
              }
            }
          }
        }
      }
    },
    'HealthIndicators': {
      '$id': '/properties/HealthIndicators',
      '$comment': 'A Health Indicator is a parameter that has a direct correlation with the current condition of the Asset. Health Indicators are either direct measurements or observations made on the asset or calculations derived from these observations. In this way, direct measurements for a given Health Indicator can be used to build more complex calculated Health Indicators, affording a layered analysis structure to be developed. Typical examples of these measurements or observations are: Temperature, Dissolved Gas Content, Insulation Resistance,  Oil Leak Size, Number of Operations, etc.',
      'type': 'object',
      'properties': {
        'Uncertainty': {
          '$id': '/properties/HealthIndicators/properties/Uncertainty',
          '$comment': 'Uncertainty is a measure of how many Measurements are not available of all the possible Health Indicators defined for a particular Asset. A particular assessment will have higher Uncertainty as the number of available Measurements decreases.',
          'type': 'array',
          'items': {
            '$id': '/properties/HealthIndicators/properties/Uncertainty/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/HealthIndicators/properties/Uncertainty/items/properties/Date',
                'type': 'string'
              },
              'AvailableMeasurements': {
                '$id': '/properties/HealthIndicators/properties/Uncertainty/items/properties/AvailableMeasurements',
                'type': 'number'
              },
              'Uncertainty': {
                '$id': '/properties/HealthIndicators/properties/Uncertainty/items/properties/Date',
                'type': 'number'
              }
            }
          }
        },
        'OilAnalyses': {
          '$id': '/properties/HealthIndicators/properties/OilAnalyses',
          'type': 'array',
          'items': {
            '$id': '/properties/HealthIndicators/properties/OilAnalyses/items',
            'type': 'object',
            'properties': {
              'Sample': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Sample',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/Sample/properties/Date',
                    'type': 'string'
                  },
                  'SampleNumber': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/Sample/properties/SampleNumber',
                    'type': [
                      'string',
                      'number'
                    ]
                  },
                  'SamplingPoint': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/Sample/properties/SamplingPoint',
                    'type': 'string'
                  },
                  'SampleTemperature': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/Sample/properties/SampleTemperature',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Temperature'
                      }
                    ]
                  }
                }
              },
              'DissolvedGases': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases',
                'type': 'object',
                'properties': {
                  'ConcentrationUnit': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/ConcentrationUnit',
                    'type': 'string',
                    'enum': [
                      'ppm',
                      'ppb',
                      'ul/l'
                    ]
                  },
                  'Hydrogen': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Hydrogen',
                    'type': 'number'
                  },
                  'Methane': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Methane',
                    'type': 'number'
                  },
                  'Ethane': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Ethane',
                    'type': 'number'
                  },
                  'Ethylene': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Ethylene',
                    'type': 'number'
                  },
                  'Acetylene': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Acetylene',
                    'type': 'number'
                  },
                  'CarbonMonoxide': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/CarbonMonoxide',
                    'type': 'number'
                  },
                  'CarbonDioxide': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/CarbonDioxide',
                    'type': 'number'
                  },
                  'Oxygen': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Oxygen',
                    'type': 'number'
                  },
                  'Nitrogen': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedGases/properties/Nitrogen',
                    'type': 'number'
                  }
                }
              },
              'OilQuality': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality',
                'type': 'object',
                'properties': {
                  'Acidity': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality/properties/Acidity',
                    'type': 'number'
                  },
                  'DielectricStrength': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality/properties/DielectricStrength',
                    'type': 'number'
                  },
                  'InterfacialTension': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality/properties/InterfacialTension',
                    'type': 'number'
                  },
                  'MoistureContent': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality/properties/MoistureContent',
                    'type': 'number'
                  },
                  'Colour': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality/properties/Colour',
                    'type': 'number'
                  },
                  'Appearance': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/OilQuality/properties/Appearance',
                    'type': 'string'
                  }
                }
              },
              'Furanic Compounds': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds',
                'type': 'object',
                'properties': {
                  'ConcentrationUnit': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds/properties/ConcentrationUnit',
                    'type': 'string',
                    'enum': [
                      'ppm',
                      'ppb',
                      'ul/l'
                    ]
                  },
                  '2AcetylFuran': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds/properties/2AcetylFuran',
                    'title': '2-ACF',
                    'type': 'number'
                  },
                  '2Furfural': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds/properties/2Furfural',
                    'title': '2-FAL',
                    'type': 'number'
                  },
                  '2Furfurol': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds/properties/2Furfurol',
                    'title': '2-FOL',
                    'type': 'number'
                  },
                  '5Hydroxymethyl2furfural': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds/properties/5Hydroxymethyl2furfural',
                    'title': '5-HMF',
                    'type': 'number'
                  },
                  '5Methyl2furfural': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/FuranicCompounds/properties/5Methyl2furfural',
                    'title': '5-MEF',
                    'type': 'number'
                  }
                }
              },
              'PCB': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/PCB',
                'title': 'Polychlorinatedbiphenyls',
                'type': 'object',
                'properties': {
                  'Concentration': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/PCB/properties/Concentration',
                    'type': 'number'
                  },
                  'ConcentrationUnit': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/PCB/properties/ConcentrationUnit',
                    'type': 'string',
                    'enum': [
                      'ppm',
                      'ppb',
                      'ul/l'
                    ]
                  }
                }
              },
              'ParticlesCount': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/ParticlesCount',
                'type': 'object',
                'properties': {
                  'ParticleSize': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/ParticlesCount/properties/ParticleSize',
                    'type': 'string'
                  },
                  'Count': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/ParticlesCount/properties/Count',
                    'type': 'number'
                  }
                }
              },
              'DielectricDissipationFactor': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DielectricDissipationFactor',
                'type': 'object',
                'properties': {
                  'Temperature': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DielectricDissipationFactor/properties/Temperature',
                    '$ref': '#/definitions/Temperature'
                  },
                  'Value': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DielectricDissipationFactor/properties/Value',
                    'type': 'number'
                  }
                }
              },
              'Resistivity': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Resistivity',
                'type': 'object',
                'properties': {
                  'Temperature': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Resistivity/properties/Temperature',
                    '$ref': '#/definitions/Temperature'
                  },
                  'Resistivity': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Resistivity/properties/Resistivity',
                    'type': 'number'
                  },
                  'ResistivityUnit': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Resistivity/properties/ResistivityUnit',
                    'type': 'string'
                  }
                }
              },
              'DissolvedMetalAnalysis': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedMetalAnalysis',
                'type': 'object',
                'properties': {
                  'ConcentrationUnit': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedMetalAnalysis/properties/ConcentrationUnit',
                    'type': 'string',
                    'enum': [
                      'ppm',
                      'ppb',
                      'ul/l'
                    ]
                  },
                  'Aluminium': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedMetalAnalysis/properties/Aluminium',
                    'type': 'number'
                  },
                  'Copper': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedMetalAnalysis/properties/Aluminium',
                    'type': 'number'
                  },
                  'Iron': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/DissolvedMetalAnalysis/properties/Aluminium',
                    'type': 'number'
                  }
                }
              },
              'Methanol': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Methanol',
                'type': 'object',
                'properties': {
                  'ConcentrationUnit': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Methanol/properties/ConcentrationUnit',
                    'type': 'string',
                    'enum': [
                      'ppm',
                      'ppb',
                      'ul/l'
                    ]
                  },
                  'Concentration': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/Methanol/properties/Concentration',
                    'type': 'number'
                  }
                }
              },
              'InhibitorContent': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/InhibitorContent',
                'type': 'number'
              },
              'PassivatorContent': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/PassivatorContent',
                'type': 'number'
              },
              'CorrosiveSulphur': {
                '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/CorrosiveSulphur',
                'type': 'object',
                'properties': {
                  'Method': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/CorrosiveSulphur/properties/Method',
                    'type': 'string'
                  },
                  'Classification': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/CorrosiveSulphur/properties/Classification',
                    'type': 'string'
                  },
                  'Comments': {
                    '$id': '/properties/HealthIndicators/properties/OilAnalyses/items/properties/CorrosiveSulphur/properties/Comments',
                    'type': 'string'
                  }
                }
              }
            }
          }
        },
        'ElectricalTests': {
          '$id': '/properties/HealthIndicators/properties/ElectricalTests',
          'type': 'array',
          'items': {
            '$id': '/properties/HealthIndicators/properties/ElectricalTests/items',
            'type': 'object',
            'properties': {
              'DielectricFrequencyResponse': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/Date',
                    'type': 'string'
                  },
                  'WindingTemperature': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/WindingTemperature',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Temperature'
                      }
                    ]
                  },
                  'BarriersPercentage': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/BarriersPercentage',
                    'type': 'number'
                  },
                  'SpacersPercentage': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/SpacersPercentage',
                    'type': 'number'
                  },
                  'Conductivity': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/Conductivity',
                    'type': 'number'
                  },
                  'ConductivityUnit': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/ConductivityUnit',
                    'type': 'string'
                  },
                  'MoisturePercentage': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/MoisturePercentage',
                    'type': 'number'
                  },
                  'Notes': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricFrequencyResponse/properties/Notes',
                    'type': 'string'
                  }
                }
              },
              'DielectricDissipationFactorAndCapacitance': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Date',
                    'type': 'string'
                  },
                  'WindingTemperature': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/WindingTemperature',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Temperature'
                      }
                    ]
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'Configuration': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/Configuration',
                          'type': 'string'
                        },
                        'TestObjectTemperature': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/TestObjectTemperature',
                          'type': 'object',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Temperature'
                            }
                          ]
                        },
                        'TestVoltage': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/TestVoltage',
                          'type': 'object',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Voltage'
                            }
                          ]
                        },
                        'MeasuredDielectricDissipationFactor': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/MeasuredDielectricDissipationFactor',
                          'type': 'number'
                        },
                        'CorrectionFactor': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/CorrectionFactor',
                          'type': 'number'
                        },
                        'Capacitance': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/Capacitance',
                          'type': 'number'
                        },
                        'CapacitanceUnit': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/CapacitanceUnit',
                          'type': 'string',
                          'enum': [
                            'pF',
                            'nF'
                          ]
                        },
                        'Notes': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/DielectricDissipationFactorAndCapacitance/properties/Measurements/items/properties/Notes',
                          'type': 'string'
                        }
                      }
                    }
                  }
                }
              },
              'ExcitationCurrent': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent',
                'type': 'object',
                'Date': {
                  'type': 'string'
                },
                'properties': {
                  'Side': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Side',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Side'
                      }
                    ]
                  },
                  'Phase': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Phase',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Phase'
                      }
                    ]
                  },
                  'TestVoltage': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/TestVoltage',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Voltage'
                      }
                    ]
                  },
                  'Notes': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Notes',
                    'type': 'string'
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'TapPosition': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Measurements/items/properties/TapPosition',
                          'type': 'integer'
                        },
                        'Current': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/ExcitationCurrent/properties/Measurements/items/properties/Current',
                          'type': 'object',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Current'
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              },
              'LeakageImpedance': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Date',
                    'type': 'string'
                  },
                  'Configuration': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Configuration',
                    'type': 'string'
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'Phase': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Measurements/items/properties/Phase',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Phase'
                            }
                          ]
                        },
                        'PercentImpedance': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Measurements/items/properties/PercentImpedance',
                          'type': 'number'
                        },
                        'PercentReactance': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Measurements/items/properties/PercentReactance',
                          'type': 'number'
                        },
                        'Notes': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/LeakageImpedance/properties/Measurements/items/properties/Notes',
                          'type': 'string'
                        }
                      }
                    }
                  }
                }
              },
              'TurnToTurnRatio': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Date',
                    'type': 'string'
                  },
                  'AppliedSide': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/AppliedSide',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Side'
                      }
                    ]
                  },
                  'MeasuredSide': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/MeasuredSide',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Side'
                      }
                    ]
                  },
                  'AppliedVoltage': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/AppliedVoltage',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Voltage'
                      }
                    ]
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'Phase': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/Phase',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Phase'
                            }
                          ]
                        },
                        'AppliedSideTapPosition': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/AppliedSideTapPosition',
                          'type': 'integer'
                        },
                        'AppliedSideVoltageVoltage': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/AppliedSideVoltage',
                          'type': 'number'
                        },
                        'MeasuredSideTapPosition': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/MeasuredSideTapPosition',
                          'type': 'integer'
                        },
                        'MeasuredSideVoltage': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/MeasuredSideVoltage',
                          'type': 'number'
                        },
                        'Ratio': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/Ratio',
                          'type': 'number'
                        },
                        'Notes': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/TurnToTurnRatio/properties/Measurements/items/properties/Notes',
                          'type': 'string'
                        }
                      }
                    }
                  }
                }
              },
              'WindingResistance': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Date',
                    'type': 'string'
                  },
                  'WindingTemperature': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/WindingTemperature',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Temperature'
                      }
                    ]
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'Side': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items/properties/Side',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Side'
                            }
                          ]
                        },
                        'Configuration': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items/properties/Configuration',
                          'type': 'string'
                        },
                        'TestCurrent': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items/properties/TestCurrent',
                          'type': 'object',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Current'
                            }
                          ]
                        },
                        'TapPosition': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items/properties/TapPosition',
                          'type': 'integer'
                        },
                        'Resistance': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items/properties/Resistance',
                          'type': 'object',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Resistance'
                            }
                          ]
                        },
                        'Notes': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/WindingResistance/properties/Measurements/items/properties/Notes',
                          'type': 'string'
                        }
                      }
                    }
                  }
                }
              },
              'InsulationResistance': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/Date',
                    'type': 'string'
                  },
                  'Configuration': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/Configuration',
                    'type': 'string'
                  },
                  'TestVoltage': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/TestVoltage',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Voltage'
                      }
                    ]
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'Time': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/Measurements/items/properties/Time',
                          'type': 'number'
                        },
                        'Resistance': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/Measurements/items/properties/Resistance',
                          'type': 'object',
                          'allOf': [
                            {
                              '$ref': '#/definitions/Resistance'
                            }
                          ]
                        }
                      }
                    }
                  },
                  'PolarisationIndex': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/PolarisationIndex',
                    'type': 'number'
                  },
                  'DielectricAbsorptionRatio': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/InsulationResistance/properties/DielectricAbsorptionRatio',
                    'type': 'number'
                  }
                }
              },
              'SweepFrequencyResponseAnalysis': {
                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Date',
                    'type': 'string'
                  },
                  'Measurements': {
                    '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items',
                      'type': 'object',
                      'properties': {
                        'Timestamp': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Timestamp',
                          'type': 'string'
                        },
                        'Configuration': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Configuration',
                          'type': 'string'
                        },
                        'TraceData': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/TraceData',
                          'type': 'array',
                          'items': {
                            '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/TraceData/items',
                            'type': 'object',
                            'properties': {
                              'Frequency': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/TraceData/items/properties/Frequency',
                                'type': 'number'
                              },
                              'Magnitude': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/TraceData/items/properties/Magnitude',
                                'type': 'number'
                              },
                              'Angle': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/TraceData/items/properties/Angle',
                                'type': 'number'
                              }
                            }
                          }
                        },
                        'Comparisons': {
                          '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Comparisons',
                          'type': 'array',
                          'items': {
                            '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Comparisons/items',
                            'type': 'object',
                            'properties': {
                              'Basetimestamp': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Comparisons/items/properties/BaseTimestamp',
                                'type': 'string'
                              },
                              'Frequency': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Comparisons/items/properties/Frequency',
                                'type': 'number'
                              },
                              'CorrelationFactor': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Comparisons/items/properties/CorrelationFactor',
                                'type': 'number'
                              },
                              'Notes': {
                                '$id': '/properties/HealthIndicators/properties/ElectricalTests/items/properties/SweepFrequencyResponseAnalysis/properties/Measurements/items/properties/Comparisons/items/properties/Notes',
                                'type': 'string'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        'OtherTests': {
          '$id': '/properties/HealthIndicators/properties/OtherTests',
          'type': 'object',
          'properties': {
            'PaperDegreeOfPolymerisation': {
              '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation',
              'type': 'array',
              'items': {
                '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation/items',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation/items/properties/Date',
                    'type': 'string'
                  },
                  'Side': {
                    '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation/items/properties/Side',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Side'
                      }
                    ]
                  },
                  'Phase': {
                    '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation/items/properties/Phase',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Phase'
                      }
                    ]
                  },
                  'SamplingPoint': {
                    '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation/items/properties/SamplingPoint',
                    'type': 'string'
                  },
                  'MeasuredDP': {
                    '$id': '/properties/HealthIndicators/properties/OtherTests/properties/PaperDegreeOfPolymerisation/items/properties/MeasuredDP',
                    'type': 'number'
                  }
                }
              }
            }
          }
        },
        'VisualInspections': {
          '$id': '/properties/HealthIndicators/properties/VisualInspections',
          'type': 'object',
          'properties': {
            'Internal': {
              '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/Internal',
              'type': 'array',
              'items': {
                '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/Internal/items',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/Internal/items/properties/Date',
                    'type': 'string'
                  },
                  'Component': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/Internal/items/properties/Component',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Component'
                      }
                    ]
                  },
                  'Condition': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/Internal/items/properties/Condition',
                    'type': 'string'
                  },
                  'Severity': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/Internal/items/properties/Severity',
                    'type': [
                      'string',
                      'number'
                    ]
                  }
                }
              }
            },
            'External': {
              '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/External',
              'type': 'array',
              'items': {
                '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/External/items',
                'type': 'object',
                'properties': {
                  'Date': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/External/items/properties/Date',
                    'type': 'string'
                  },
                  'Component': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/External/items/properties/Component',
                    'type': 'object',
                    'allOf': [
                      {
                        '$ref': '#/definitions/Component'
                      }
                    ]
                  },
                  'Condition': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/External/items/properties/Condition',
                    'type': 'string'
                  },
                  'Severity': {
                    '$id': '/properties/HealthIndicators/properties/VisualInspections/properties/External/items/properties/Severity',
                    'type': [
                      'string',
                      'number'
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    'StressFactors': {
      '$id': '/properties/StressFactors',
      '$comment': 'A Stress Factor is external to the Asset and represents a demand placed on it. Examples of Stress Factors include, load, ambient temperature, vibration, over-voltages, over-currents, etc.',
      'type': 'object',
      'properties': {
        'NumberOfTapChanges': {
          '$id': '/properties/StressFactors/properties/NumberOfTapChanges',
          'type': 'array',
          'items': {
            '$id': '/properties/StressFactors/properties/NumberOfTapChanges/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/StressFactors/properties/NumberOfTapChanges/items/properties/Date',
                'type': 'string'
              },
              'Count': {
                '$id': '/properties/StressFactors/properties/NumberOfTapChanges/items/properties/Count',
                'type': 'integer'
              },
              'CurrentPosition': {
                '$id': '/properties/StressFactors/properties/NumberOfTapChanges/items/properties/CurrentPosition',
                'type': 'integer'
              },
              'MaximumPosition': {
                '$id': '/properties/StressFactors/properties/NumberOfTapChanges/items/properties/MaximumPosition',
                'type': 'integer'
              },
              'MinimumPosition': {
                '$id': '/properties/StressFactors/properties/NumberOfTapChanges/items/properties/MinimumPosition',
                'type': 'integer'
              }
            }
          }
        },
        'LoadCurrents': {
          '$id': '/properties/StressFactors/properties/LoadCurrents',
          'type': 'array',
          'items': {
            '$id': '/properties/StressFactors/properties/LoadCurrents/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/StressFactors/properties/LoadCurrents/items/properties/Date',
                'type': 'string'
              },
              'Current': {
                '$id': '/properties/StressFactors/properties/LoadCurrents/items/properties/Current',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Current'
                  }
                ]
              },
              'AverageCurrent': {
                '$id': '/properties/StressFactors/properties/LoadCurrents/items/properties/AverageCurrent',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Current'
                  }
                ]
              },
              'MaximumCurrent': {
                '$id': '/properties/StressFactors/properties/LoadCurrents/items/properties/MaximumCurrent',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Current'
                  }
                ]
              },
              'MinimumCurrent': {
                '$id': '/properties/StressFactors/properties/LoadCurrents/items/properties/MinimumCurrent',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Current'
                  }
                ]
              }
            }
          }
        },
        'OperatingVoltages': {
          '$id': '/properties/StressFactors/properties/OperatingVoltages',
          'type': 'array',
          'items': {
            '$id': '/properties/StressFactors/properties/OperatingVoltages/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/StressFactors/properties/OperatingVoltages/items/properties/Date',
                'type': 'string'
              },
              'Voltage': {
                '$id': '/properties/StressFactors/properties/OperatingVoltages/items/properties/Voltage',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  }
                ]
              },
              'AverageVoltage': {
                '$id': '/properties/StressFactors/properties/OperatingVoltages/items/properties/AverageVoltage',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  }
                ]
              },
              'MaximumVoltage': {
                '$id': '/properties/StressFactors/properties/OperatingVoltages/items/properties/MaximumVoltage',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  }
                ]
              },
              'MinimumVoltage': {
                '$id': '/properties/StressFactors/properties/OperatingVoltages/items/properties/MinimumVoltage',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  }
                ]
              }
            }
          }
        },
        'OperatingTemperatures': {
          '$id': '/properties/StressFactors/properties/OperatingTemperatures',
          'type': 'array',
          'items': {
            '$id': '/properties/StressFactors/properties/OperatingTemperatures/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/StressFactors/properties/OperatingTemperatures/items/properties/Date',
                'type': 'string'
              },
              'Temperature': {
                '$id': '/properties/StressFactors/properties/OperatingTemperatures/items/properties/Temperature',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Temperature'
                  }
                ]
              },
              'AverageTemperature': {
                '$id': '/properties/StressFactors/properties/OperatingTemperatures/items/properties/AverageTemperature',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Temperature'
                  }
                ]
              },
              'MaximumTemperature': {
                '$id': '/properties/StressFactors/properties/OperatingTemperatures/items/properties/MaximumTemperature',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Temperature'
                  }
                ]
              },
              'MinimumTemperature': {
                '$id': '/properties/StressFactors/properties/OperatingTemperatures/items/properties/MinimumTemperature',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Temperature'
                  }
                ]
              }
            }
          }
        },
        'ProtectionEvents': {
          '$id': '/properties/StressFactors/properties/ProtectionEvents',
          'type': 'array',
          'items': {
            '$id': '/properties/StressFactors/properties/ProtectionEvents/items',
            'type': 'object',
            'properties': {
              'Date': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Date',
                'type': 'string'
              },
              'ProtectionFunction': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/ProtectionFunction',
                'type': 'string'
              },
              'RelayReference': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/RelayReference',
                'type': 'string'
              },
              'Comments': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Comments',
                'type': 'string'
              },
              'Current': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Current',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Current'
                  }
                ]
              },
              'Voltage': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Voltage',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  }
                ]
              },
              'Angle': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Angle',
                'type': 'number'
              },
              'Duration': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Duration',
                'type': 'number'
              },
              'Oscillogram': {
                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram',
                'type': 'object',
                'properties': {
                  'RecordedProperty': {
                    '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/RecordedProperty',
                    'type': 'string',
                    'enum': [
                      'Current',
                      'Voltage',
                      'Angle',
                      'Impedance',
                      'Power'
                    ]
                  },
                  'Record': {
                    '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record',
                    'type': 'array',
                    'items': {
                      '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items',
                      'type': 'object',
                      'properties': {
                        'Timestamp': {
                          '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items/properties/Timestamp',
                          'type': 'string'
                        },
                        'Value': {
                          '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items/properties/Value',
                          'type': 'number'
                        },
                        'TriggeredDigitalElements': {
                          '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items/properties/TriggeredDigitalElements',
                          'type': 'array',
                          'items': {
                            '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items/properties/TriggeredDigitalElements/items',
                            'type': 'object',
                            'properties': {
                              'Element': {
                                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items/properties/TriggeredDigitalElements/items/properties/Element',
                                'type': 'string'
                              },
                              'Condition': {
                                '$id': '/properties/StressFactors/properties/ProtectionEvents/items/properties/Oscillogram/properties/Record/items/properties/TriggeredDigitalElements/items/properties/Condition',
                                'type': 'boolean'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        'LightningActivity': {
          '$id': '/properties/StressFactors/properties/LightningActivity',
          'type': 'array',
          'items': {
            '$id': '/properties/StressFactors/properties/LightningActivity/items',
            'type': 'object',
            'properties': {
              'Region': {
                '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/Region',
                'type': 'string'
              },
              'GeographicalCoordinates': {
                '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/GeographicalCoordinates',
                'type': 'object',
                'properties': {
                  'Latitude': {
                    '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/GeographicalCoordinates/properties/Latitude',
                    'type': 'number'
                  },
                  'Longitude': {
                    '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/GeographicalCoordinates/properties/Longitude',
                    'type': 'number'
                  },
                  'Altitude': {
                    '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/GeographicalCoordinates/properties/Altitude',
                    'type': 'number'
                  }
                }
              },
              'StartDate': {
                '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/StartDate',
                'type': 'string'
              },
              'EndDate': {
                '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/EndDate',
                'type': 'string'
              },
              'Magnitude': {
                '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/Magnitude',
                'type': 'object',
                'allOf': [
                  {
                    '$ref': '#/definitions/Voltage'
                  },
                  {
                    '$ref': '#/definitions/Current'
                  }
                ]
              },
              'Count': {
                '$id': '/properties/StressFactors/properties/LightningActivity/items/properties/Count',
                'type': 'number'
              }
            }
          }
        }
      }
    },
    'ConditionAssessments': {
      '$id': '/properties/ConditionAssessments',
      'type': 'array',
      'items': {
        '$id': '/properties/ConditionAssessments/items',
        'type': 'object',
        'properties': {
          'Date': {
            '$id': '/properties/ConditionAssessments/items/properties/Date',
            'type': 'string'
          },
          'ConditionType': {
            '$id': '/properties/ConditionAssessments/items/properties/ConditionType',
            '$comment': 'This field can be used to convey a particular classification system that a particular organisation might want to use, for example, (Good,Fair,Poor,Bad) or even a numeric system (1,2,3).',
            'type': [
              'string',
              'number'
            ]
          },
          'AssetHealthIndex': {
            '$id': '/properties/ConditionAssessments/items/properties/AssetHealthIndex',
            '$comment': 'The Health Index of an Asset is determined by a combination of the Health Index, the Stress Factors and the Uncertainty. It represents the final condition assessment for the Asset at a particular point in time. The trigger to recalculate the Health Index of an Asset is determined by the availability of new Measurements on any of the defined Health Indicators or Stress Factors. A Measurement is a specific time-stamped instance of a Health Indicator or a Stress Factor. For example, the temperature of an asset or the load on it on a specific date and time. ',
            'type': 'number'
          },
          'ConditionDescription': {
            '$id': '/properties/ConditionAssessments/items/properties/ConditionDescription',
            '$comment': 'This field provides the details of the assessment and explains why a particular [ConditionType] has been chosen. This could be the result of a Subjet Matter Expert (SME) assessment or the outcome of an automatted assessment rule.',
            'type': 'string'
          },
          'AssessmentTechniques': {
            '$id': '/properties/ConditionAssessments/items/properties/AssessmentTechniques',
            '$comment': 'This field identifies how the condition assessment was derived. It could be an experience based assessment or it could list a number of industry standard algorithms used to judge the condition of this asset (i.e. Duval Triangles, IEC60599, etc.). This could also include a numebr of assessment rules used for this assessment. An Analysis Rule is a function that takes as inputs the following: Measurements of Health Indicators, Measurements of Stress Factors or, the output of other Analysis Rules. The output of an Analysis Rule is called a Score. Depending on the chosen scoring system a Score can be a number or a letter which represents the output of the Analysis Rule function.',
            'type': 'array',
            'items': {
              '$id': '/properties/ConditionAssessments/items/properties/AssessmentTechniques/items',
              'type': 'object',
              'properties': {
                'Name': {
                  '$id': '/properties/ConditionAssessments/items/properties/AssessmentTechniques/items/properties/Name',
                  'type': 'string'
                },
                'ModifiedDate': {
                  '$id': '/properties/ConditionAssessments/items/properties/AssessmentTechniques/items/properties/ModifiedDate',
                  'type': 'string'
                },
                'Comments': {
                  '$id': '/properties/ConditionAssessments/items/properties/AssessmentTechniques/items/properties/Comments',
                  'type': 'string'
                }
              }
            }
          },
          'AssessedBy': {
            '$id': '/properties/ConditionAssessments/items/properties/AssessedBy',
            'type': 'string'
          },
          'FailureModes': {
            '$id': '/properties/ConditionAssessments/items/properties/FailureModes',
            '$comment': 'This is a list of Failure Modes and how likely they were to be present at the time of the assessment.',
            'type': 'array',
            'items': {
              '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items',
              'type': 'object',
              'properties': {
                'Name': {
                  '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items/properties/Name',
                  'type': 'string'
                },
                'Description': {
                  '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items/properties/Description',
                  'type': 'string'
                },
                'Effect': {
                  '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items/properties/Effect',
                  'type': 'string'
                },
                'LikelihoodOfPresence': {
                  '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items/properties/LikelihoodOfPresence',
                  'type': 'string',
                  'enum': [
                    'Very Unlikely',
                    'Unlikely',
                    'Likely',
                    'Very Likely',
                    'Unknown',
                    'Not Applicable'
                  ]
                },
                'Severity': {
                  '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items/properties/Severity',
                  'type': [
                    'string',
                    'number'
                  ]
                },
                'RecommendedAction': {
                  '$id': '/properties/ConditionAssessments/items/properties/FailureModes/items/properties/RecommendedAction',
                  'type': 'string'
                }
              }
            }
          }
        }
      }
    }
  }
}