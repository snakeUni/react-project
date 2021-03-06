package com.timo.react.utils.response;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Uni on 2018/4/30.
 */
public class GetResponse extends Response {

    private Map<String, Object> get_response = new HashMap<String, Object>();

    public GetResponse(String key, Object value) {
        get_response.put(key, value);
    }

    public Map<String, Object> getGet_response(){
        return get_response;
    }

    public void putValue(String key, Object value) {
        get_response.put(key, value);
    }
}
