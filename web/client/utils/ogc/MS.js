/**
 * Copyright 2022, Landry Breuil <breuil@craig.fr>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * This definition of MS adds the mapserver vendor extension GetStyles to the possible WMS elements
 * originally available in the ogc-schemas mappings.
 *
 * generated using java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -p MS -b ms.xjb ms.xsd
 * using those input files:

 * ms.xsd:

<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://www.w3.org/2001/XMLSchema" xmlns:wms="http://www.opengis.net/wms"
	xmlns:ms="http://mapserver.gis.umn.edu/mapserver" targetNamespace="http://mapserver.gis.umn.edu/mapserver" elementFormDefault="qualified" version="1.0.0">
	<import namespace="http://www.opengis.net/wms" schemaLocation="http://schemas.opengis.net/wms/1.3.0/capabilities_1_3_0.xsd"/>
	<element name="GetStyles" type="wms:OperationType" substitutionGroup="wms:_ExtendedOperation"/>
</schema>

 * ms.xjb (taken from https://github.com/highsource/jsonix-schema-compiler/issues/83):

<jaxb:bindings version="1.0" xmlns:jaxb="http://java.sun.com/xml/ns/jaxb"
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
	xmlns:xjc="http://java.sun.com/xml/ns/jaxb/xjc"
	jaxb:extensionBindingPrefixes="xjc">

	<jaxb:bindings scd="x-schema::xlink" xmlns:xlink="http://www.w3.org/1999/xlink">
		<jaxb:bindings scd="/group::xlink:locatorModel/model::sequence/xlink:title">
			<jaxb:property name="LocatorTitle"/>
		</jaxb:bindings>
	</jaxb:bindings>
</jaxb:bindings>
 */

// Disable ESLint because the file was generated by jsonix tools
/* eslint-disable */
var MS_Module_Factory = function () {
  var MS = {
    name: 'MS',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wms',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        localName: 'ArcType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
          localPart: 'arcType'
        },
        propertyInfos: [{
            name: 'locatorTitle',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            typeInfo: '.TitleEltType'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'from',
            typeInfo: 'NCName',
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'NCName',
            type: 'attribute'
          }]
      }, {
        localName: 'LocatorType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
          localPart: 'locatorType'
        },
        propertyInfos: [{
            name: 'locatorTitle',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            typeInfo: '.TitleEltType'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'href',
            required: true,
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'label',
            typeInfo: 'NCName',
            type: 'attribute'
          }]
      }, {
        localName: 'WMSCapabilities',
        typeName: null,
        propertyInfos: [{
            name: 'service',
            required: true,
            elementName: 'Service',
            typeInfo: '.Service'
          }, {
            name: 'capability',
            required: true,
            elementName: 'Capability',
            typeInfo: '.Capability'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Post',
        typeName: null,
        propertyInfos: [{
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'DCPType',
        typeName: null,
        propertyInfos: [{
            name: 'http',
            required: true,
            elementName: 'HTTP',
            typeInfo: '.HTTP'
          }]
      }, {
        localName: 'Simple',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
          localPart: 'simple'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'type',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'Token',
            type: 'attribute'
          }]
      }, {
        localName: 'DataURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'StyleSheetURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'LegendURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'width',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MetadataURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AuthorityURL',
        typeName: null,
        propertyInfos: [{
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'name',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StyleURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'EXGeographicBoundingBox',
        typeName: null,
        propertyInfos: [{
            name: 'westBoundLongitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'eastBoundLongitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'southBoundLatitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'northBoundLatitude',
            required: true,
            typeInfo: 'Double'
          }]
      }, {
        localName: 'Extended',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
          localPart: 'extended'
        },
        propertyInfos: [{
            name: 'extendedModel',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'title',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: '.TitleEltType'
              }, {
                elementName: {
                  localPart: 'resource',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: '.ResourceType'
              }, {
                elementName: {
                  localPart: 'locator',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: '.LocatorType'
              }, {
                elementName: {
                  localPart: 'arc',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: '.ArcType'
              }],
            type: 'elements'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }]
      }, {
        localName: 'ContactAddress',
        typeName: null,
        propertyInfos: [{
            name: 'addressType',
            required: true,
            elementName: 'AddressType'
          }, {
            name: 'address',
            required: true,
            elementName: 'Address'
          }, {
            name: 'city',
            required: true,
            elementName: 'City'
          }, {
            name: 'stateOrProvince',
            required: true,
            elementName: 'StateOrProvince'
          }, {
            name: 'postCode',
            required: true,
            elementName: 'PostCode'
          }, {
            name: 'country',
            required: true,
            elementName: 'Country'
          }]
      }, {
        localName: 'Request',
        typeName: null,
        propertyInfos: [{
            name: 'getCapabilities',
            required: true,
            elementName: 'GetCapabilities',
            typeInfo: '.OperationType'
          }, {
            name: 'getMap',
            required: true,
            elementName: 'GetMap',
            typeInfo: '.OperationType'
          }, {
            name: 'getFeatureInfo',
            elementName: 'GetFeatureInfo',
            typeInfo: '.OperationType'
          }, {
            name: 'extendedOperation',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: '_ExtendedOperation',
            typeInfo: '.OperationType',
            type: 'elementRef'
          }]
      }, {
        localName: 'FeatureListURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'ContactInformation',
        typeName: null,
        propertyInfos: [{
            name: 'contactPersonPrimary',
            elementName: 'ContactPersonPrimary',
            typeInfo: '.ContactPersonPrimary'
          }, {
            name: 'contactPosition',
            elementName: 'ContactPosition'
          }, {
            name: 'contactAddress',
            elementName: 'ContactAddress',
            typeInfo: '.ContactAddress'
          }, {
            name: 'contactVoiceTelephone',
            elementName: 'ContactVoiceTelephone'
          }, {
            name: 'contactFacsimileTelephone',
            elementName: 'ContactFacsimileTelephone'
          }, {
            name: 'contactElectronicMailAddress',
            elementName: 'ContactElectronicMailAddress'
          }]
      }, {
        localName: 'Identifier',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'authority',
            required: true,
            attributeName: {
              localPart: 'authority'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'HTTP',
        typeName: null,
        propertyInfos: [{
            name: 'get',
            required: true,
            elementName: 'Get',
            typeInfo: '.Get'
          }, {
            name: 'post',
            elementName: 'Post',
            typeInfo: '.Post'
          }]
      }, {
        localName: 'Keyword',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'vocabulary',
            attributeName: {
              localPart: 'vocabulary'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Capability',
        typeName: null,
        propertyInfos: [{
            name: 'request',
            required: true,
            elementName: 'Request',
            typeInfo: '.Request'
          }, {
            name: 'exception',
            required: true,
            elementName: 'Exception',
            typeInfo: '.Exception'
          }, {
            name: 'extendedCapabilities',
            minOccurs: 0,
            collection: true,
            elementName: '_ExtendedCapabilities',
            typeInfo: 'AnyType'
          }, {
            name: 'layer',
            elementName: 'Layer',
            typeInfo: '.Layer'
          }]
      }, {
        localName: 'Service',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: 'Name'
          }, {
            name: 'title',
            required: true,
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywordList',
            elementName: 'KeywordList',
            typeInfo: '.KeywordList'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'contactInformation',
            elementName: 'ContactInformation',
            typeInfo: '.ContactInformation'
          }, {
            name: 'fees',
            elementName: 'Fees'
          }, {
            name: 'accessConstraints',
            elementName: 'AccessConstraints'
          }, {
            name: 'layerLimit',
            elementName: 'LayerLimit',
            typeInfo: 'PositiveInteger'
          }, {
            name: 'maxWidth',
            elementName: 'MaxWidth',
            typeInfo: 'PositiveInteger'
          }, {
            name: 'maxHeight',
            elementName: 'MaxHeight',
            typeInfo: 'PositiveInteger'
          }]
      }, {
        localName: 'OnlineResource',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'Token',
            type: 'attribute'
          }]
      }, {
        localName: 'Style',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: 'Name'
          }, {
            name: 'title',
            required: true,
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'legendURL',
            minOccurs: 0,
            collection: true,
            elementName: 'LegendURL',
            typeInfo: '.LegendURL'
          }, {
            name: 'styleSheetURL',
            elementName: 'StyleSheetURL',
            typeInfo: '.StyleSheetURL'
          }, {
            name: 'styleURL',
            elementName: 'StyleURL',
            typeInfo: '.StyleURL'
          }]
      }, {
        localName: 'OperationType',
        propertyInfos: [{
            name: 'format',
            required: true,
            collection: true,
            elementName: 'Format'
          }, {
            name: 'dcpType',
            required: true,
            collection: true,
            elementName: 'DCPType',
            typeInfo: '.DCPType'
          }]
      }, {
        localName: 'Exception',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            collection: true,
            elementName: 'Format'
          }]
      }, {
        localName: 'ContactPersonPrimary',
        typeName: null,
        propertyInfos: [{
            name: 'contactPerson',
            required: true,
            elementName: 'ContactPerson'
          }, {
            name: 'contactOrganization',
            required: true,
            elementName: 'ContactOrganization'
          }]
      }, {
        localName: 'Get',
        typeName: null,
        propertyInfos: [{
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'Attribution',
        typeName: null,
        propertyInfos: [{
            name: 'title',
            elementName: 'Title'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'logoURL',
            elementName: 'LogoURL',
            typeInfo: '.LogoURL'
          }]
      }, {
        localName: 'LogoURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'width',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BoundingBox',
        typeName: null,
        propertyInfos: [{
            name: 'crs',
            required: true,
            attributeName: {
              localPart: 'CRS'
            },
            type: 'attribute'
          }, {
            name: 'minx',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'minx'
            },
            type: 'attribute'
          }, {
            name: 'miny',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'miny'
            },
            type: 'attribute'
          }, {
            name: 'maxx',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'maxx'
            },
            type: 'attribute'
          }, {
            name: 'maxy',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'maxy'
            },
            type: 'attribute'
          }, {
            name: 'resx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resx'
            },
            type: 'attribute'
          }, {
            name: 'resy',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resy'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Dimension',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'units',
            required: true,
            attributeName: {
              localPart: 'units'
            },
            type: 'attribute'
          }, {
            name: 'unitSymbol',
            attributeName: {
              localPart: 'unitSymbol'
            },
            type: 'attribute'
          }, {
            name: '_default',
            attributeName: {
              localPart: 'default'
            },
            type: 'attribute'
          }, {
            name: 'multipleValues',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'multipleValues'
            },
            type: 'attribute'
          }, {
            name: 'nearestValue',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'nearestValue'
            },
            type: 'attribute'
          }, {
            name: 'current',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'current'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ResourceType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
          localPart: 'resourceType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'label',
            typeInfo: 'NCName',
            type: 'attribute'
          }]
      }, {
        localName: 'KeywordList',
        typeName: null,
        propertyInfos: [{
            name: 'keyword',
            minOccurs: 0,
            collection: true,
            elementName: 'Keyword',
            typeInfo: '.Keyword'
          }]
      }, {
        localName: 'TitleEltType',
        typeName: {
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
          localPart: 'titleEltType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Layer',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: 'Name'
          }, {
            name: 'title',
            required: true,
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywordList',
            elementName: 'KeywordList',
            typeInfo: '.KeywordList'
          }, {
            name: 'crs',
            minOccurs: 0,
            collection: true,
            elementName: 'CRS'
          }, {
            name: 'exGeographicBoundingBox',
            elementName: 'EX_GeographicBoundingBox',
            typeInfo: '.EXGeographicBoundingBox'
          }, {
            name: 'boundingBox',
            minOccurs: 0,
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: '.BoundingBox'
          }, {
            name: 'dimension',
            minOccurs: 0,
            collection: true,
            elementName: 'Dimension',
            typeInfo: '.Dimension'
          }, {
            name: 'attribution',
            elementName: 'Attribution',
            typeInfo: '.Attribution'
          }, {
            name: 'authorityURL',
            minOccurs: 0,
            collection: true,
            elementName: 'AuthorityURL',
            typeInfo: '.AuthorityURL'
          }, {
            name: 'identifier',
            minOccurs: 0,
            collection: true,
            elementName: 'Identifier',
            typeInfo: '.Identifier'
          }, {
            name: 'metadataURL',
            minOccurs: 0,
            collection: true,
            elementName: 'MetadataURL',
            typeInfo: '.MetadataURL'
          }, {
            name: 'dataURL',
            minOccurs: 0,
            collection: true,
            elementName: 'DataURL',
            typeInfo: '.DataURL'
          }, {
            name: 'featureListURL',
            minOccurs: 0,
            collection: true,
            elementName: 'FeatureListURL',
            typeInfo: '.FeatureListURL'
          }, {
            name: 'style',
            minOccurs: 0,
            collection: true,
            elementName: 'Style',
            typeInfo: '.Style'
          }, {
            name: 'minScaleDenominator',
            elementName: 'MinScaleDenominator',
            typeInfo: 'Double'
          }, {
            name: 'maxScaleDenominator',
            elementName: 'MaxScaleDenominator',
            typeInfo: 'Double'
          }, {
            name: 'layer',
            minOccurs: 0,
            collection: true,
            elementName: 'Layer',
            typeInfo: '.Layer'
          }, {
            name: 'queryable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'queryable'
            },
            type: 'attribute'
          }, {
            name: 'cascaded',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'cascaded'
            },
            type: 'attribute'
          }, {
            name: 'opaque',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'opaque'
            },
            type: 'attribute'
          }, {
            name: 'noSubsets',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'noSubsets'
            },
            type: 'attribute'
          }, {
            name: 'fixedWidth',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'fixedWidth'
            },
            type: 'attribute'
          }, {
            name: 'fixedHeight',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'fixedHeight'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TypeType',
        baseTypeInfo: 'Token',
        values: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }, {
        type: 'enumInfo',
        localName: 'ShowType',
        baseTypeInfo: 'Token',
        values: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'ActuateType',
        baseTypeInfo: 'Token',
        values: ['onLoad', 'onRequest', 'other', 'none']
      }],
    elementInfos: [{
        elementName: 'Fees'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: '.OperationType'
      }, {
        elementName: 'Attribution',
        typeInfo: '.Attribution'
      }, {
        elementName: 'Exception',
        typeInfo: '.Exception'
      }, {
        elementName: 'Request',
        typeInfo: '.Request'
      }, {
        elementName: 'MaxScaleDenominator',
        typeInfo: 'Double'
      }, {
        elementName: 'AddressType'
      }, {
        elementName: 'GetFeatureInfo',
        typeInfo: '.OperationType'
      }, {
        elementName: 'ContactOrganization'
      }, {
        elementName: 'ContactPerson'
      }, {
        elementName: 'Address'
      }, {
        elementName: 'MaxHeight',
        typeInfo: 'PositiveInteger'
      }, {
        elementName: '_ExtendedOperation',
        typeInfo: '.OperationType'
      }, {
        elementName: 'ContactVoiceTelephone'
      }, {
        elementName: 'StyleURL',
        typeInfo: '.StyleURL'
      }, {
        elementName: {
          localPart: 'GetStyles',
          namespaceURI: 'http:\/\/mapserver.gis.umn.edu\/mapserver'
        },
        typeInfo: '.OperationType',
        substitutionHead: '_ExtendedOperation'
      }, {
        elementName: 'MaxWidth',
        typeInfo: 'PositiveInteger'
      }, {
        elementName: 'ContactPosition'
      }, {
        elementName: {
          localPart: 'title',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: '.TitleEltType'
      }, {
        elementName: 'ContactInformation',
        typeInfo: '.ContactInformation'
      }, {
        elementName: 'Abstract'
      }, {
        elementName: 'BoundingBox',
        typeInfo: '.BoundingBox'
      }, {
        elementName: 'AccessConstraints'
      }, {
        elementName: 'ContactAddress',
        typeInfo: '.ContactAddress'
      }, {
        elementName: 'DataURL',
        typeInfo: '.DataURL'
      }, {
        elementName: 'Name'
      }, {
        elementName: 'Title'
      }, {
        elementName: 'City'
      }, {
        elementName: 'Style',
        typeInfo: '.Style'
      }, {
        elementName: 'OnlineResource',
        typeInfo: '.OnlineResource'
      }, {
        elementName: 'Country'
      }, {
        elementName: 'ContactElectronicMailAddress'
      }, {
        elementName: 'KeywordList',
        typeInfo: '.KeywordList'
      }, {
        elementName: 'Layer',
        typeInfo: '.Layer'
      }, {
        elementName: 'AuthorityURL',
        typeInfo: '.AuthorityURL'
      }, {
        elementName: 'EX_GeographicBoundingBox',
        typeInfo: '.EXGeographicBoundingBox'
      }, {
        elementName: 'CRS'
      }, {
        elementName: 'MinScaleDenominator',
        typeInfo: 'Double'
      }, {
        elementName: 'FeatureListURL',
        typeInfo: '.FeatureListURL'
      }, {
        elementName: 'LayerLimit',
        typeInfo: 'PositiveInteger'
      }, {
        elementName: 'StateOrProvince'
      }, {
        elementName: 'ContactPersonPrimary',
        typeInfo: '.ContactPersonPrimary'
      }, {
        elementName: 'Keyword',
        typeInfo: '.Keyword'
      }, {
        elementName: 'LegendURL',
        typeInfo: '.LegendURL'
      }, {
        elementName: {
          localPart: 'locator',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: '.LocatorType'
      }, {
        elementName: 'Capability',
        typeInfo: '.Capability'
      }, {
        elementName: 'DCPType',
        typeInfo: '.DCPType'
      }, {
        elementName: {
          localPart: 'resource',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: '.ResourceType'
      }, {
        elementName: 'Identifier',
        typeInfo: '.Identifier'
      }, {
        elementName: 'Post',
        typeInfo: '.Post'
      }, {
        elementName: 'HTTP',
        typeInfo: '.HTTP'
      }, {
        elementName: {
          localPart: 'arc',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: '.ArcType'
      }, {
        elementName: 'WMS_Capabilities',
        typeInfo: '.WMSCapabilities'
      }, {
        elementName: 'MetadataURL',
        typeInfo: '.MetadataURL'
      }, {
        elementName: 'ContactFacsimileTelephone'
      }, {
        elementName: 'PostCode'
      }, {
        elementName: 'Service',
        typeInfo: '.Service'
      }, {
        elementName: 'LogoURL',
        typeInfo: '.LogoURL'
      }, {
        elementName: '_ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'Dimension',
        typeInfo: '.Dimension'
      }, {
        elementName: 'GetMap',
        typeInfo: '.OperationType'
      }, {
        elementName: 'Get',
        typeInfo: '.Get'
      }, {
        elementName: 'StyleSheetURL',
        typeInfo: '.StyleSheetURL'
      }, {
        elementName: 'Format'
      }]
  };
  return {
    MS: MS
  };
};
if (typeof define === 'function' && define.amd) {
  define([], MS_Module_Factory);
}
else {
  var MS_Module = MS_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.MS = MS_Module.MS;
  }
  else {
    var MS = MS_Module.MS;
  }
}
/* eslint-enable */