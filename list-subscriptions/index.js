/*
Copyright 2020 Splunk Inc. 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const graph = require('../helpers/graph');

module.exports = async function (context, req) {
    let msg = '[list-subscriptions] function triggered';
    context.log(msg);

    await graph.listSubscriptions()
        .then((subscriptions) => {
            context.res = {
                body: JSON.stringify(subscriptions, null, 4)
            };
        })
        .catch((err) => {
            msg = `[list-subscriptions] error getting subscriptions: ${JSON.stringify(err, null, 4)}`
            context.log.err(msg);
            context.res = {
                body: msg
            }
        });
};