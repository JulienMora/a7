/*
 * Copyright 2021 - Bouygues Telecom
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import AssetNameParser from '~/assets/AssetNameParser'

const assetNameParser = new AssetNameParser()

const evaluatePackageSubName = function (request: NginxHTTPRequest): string {
  return assetNameParser.parseFromUrl(request.uri.toString()).subname || ''
}

const evaluatePackageNamespace = function (request: NginxHTTPRequest): string {
  return assetNameParser.parseFromUrl(request.uri.toString()).namespace || ''
}

const evaluatePackageScope = function (request: NginxHTTPRequest): string {
  return assetNameParser.parseFromUrl(request.uri.toString()).scope || ''
}

const evaluatePackageVersion = function (request: NginxHTTPRequest): string {
  return assetNameParser.parseFromUrl(request.uri.toString()).version || ''
}

const evaluatePackagePath = function (request: NginxHTTPRequest): string {
  return assetNameParser.parseFromUrl(request.uri.toString()).path || ''
}


const evaluators = {
  evaluatePackageSubName,
  evaluatePackageNamespace,
  evaluatePackageScope,
  evaluatePackageVersion,
  evaluatePackagePath,
}

export { evaluators }
