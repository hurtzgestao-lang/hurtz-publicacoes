(function () {
  "use strict";

  var originalBaseUrl = "https://saofelixdoxingu-pa.desenvolvecidade.com.br";
  var currentCertificateUrl = originalBaseUrl + "/nfsd/pages/consulta/certidaoDebito/consultaAutenticidadeCertidaoDebito.jsf?SEQ=111&ANO=2025&DOC=70454779291";

  function absoluteOriginalUrl(pathOrUrl) {
    if (!pathOrUrl || pathOrUrl === "#") {
      return "";
    }

    try {
      return new URL(pathOrUrl, originalBaseUrl).href;
    } catch (error) {
      return "";
    }
  }

  function isBlockedRequest(method, url) {
    var requestUrl;

    try {
      requestUrl = new URL(url || location.href, location.href);
    } catch (error) {
      requestUrl = new URL(location.href);
    }

    var normalizedMethod = (method || "GET").toUpperCase();
    var isWrite = normalizedMethod !== "GET" && normalizedMethod !== "HEAD" && normalizedMethod !== "OPTIONS";
    var isBackendPath = requestUrl.pathname.indexOf("/nfsd/") === 0;
    var isSameOrigin = requestUrl.origin === location.origin;

    return isBackendPath || (isSameOrigin && isWrite);
  }

  function extractRedirectFromOnclick(onclick) {
    var match = (onclick || "").match(/document\.location\.href\s*=\s*["']([^"']+)["']/);
    return match ? absoluteOriginalUrl(match[1]) : "";
  }

  function openExternal(url) {
    if (!url) {
      return false;
    }

    window.open(url, "_blank", "noopener,noreferrer");
    return true;
  }

  function installRequestBlockers() {
    if (window.PrimeFaces && typeof window.PrimeFaces.ab === "function") {
      window.PrimeFaces.ab = function () {
        return false;
      };
    }

    if (window.XMLHttpRequest && !window.XMLHttpRequest.__staticGuarded) {
      var originalOpen = window.XMLHttpRequest.prototype.open;
      var originalSend = window.XMLHttpRequest.prototype.send;

      window.XMLHttpRequest.prototype.open = function (method, url) {
        this.__staticBlocked = isBlockedRequest(method, url);
        return originalOpen.apply(this, arguments);
      };

      window.XMLHttpRequest.prototype.send = function () {
        if (this.__staticBlocked) {
          try {
            this.abort();
          } catch (error) {}
          return;
        }

        return originalSend.apply(this, arguments);
      };

      window.XMLHttpRequest.__staticGuarded = true;
    }

    if (window.fetch && !window.fetch.__staticGuarded) {
      var originalFetch = window.fetch;

      window.fetch = function (input, init) {
        var method = (init && init.method) || (input && input.method) || "GET";
        var url = input && input.url ? input.url : input;

        if (isBlockedRequest(method, url)) {
          return Promise.resolve(new Response("", { status: 204, statusText: "Static copy" }));
        }

        return originalFetch.apply(this, arguments);
      };

      window.fetch.__staticGuarded = true;
    }
  }

  function blockSilent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function prepareOriginalLinks() {
    document.querySelectorAll("a[data-original-href]").forEach(function (link) {
      var externalUrl = absoluteOriginalUrl(link.dataset.originalHref);

      if (!externalUrl) {
        return;
      }

      link.href = externalUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    document.querySelectorAll("a[onclick*='document.location.href']").forEach(function (link) {
      var externalUrl = extractRedirectFromOnclick(link.getAttribute("onclick"));

      if (!externalUrl) {
        return;
      }

      link.href = externalUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("onclick");
    });

    document.querySelectorAll("a[id*='botaoDownload']").forEach(function (link) {
      if (link.getAttribute("href") === "#") {
        link.href = currentCertificateUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    });
  }

  document.addEventListener("submit", blockSilent, true);
  installRequestBlockers();

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest && event.target.closest("a, button, input[type='submit']");

      if (!link) {
        return;
      }

      var href = link.getAttribute("href") || "";
      var onclick = link.getAttribute("onclick") || "";
      var redirectedUrl = extractRedirectFromOnclick(onclick);

      if (redirectedUrl) {
        blockSilent(event);
        openExternal(redirectedUrl);
        return;
      }

      if (link.dataset && link.dataset.originalHref) {
        var originalUrl = absoluteOriginalUrl(link.dataset.originalHref);

        if (originalUrl) {
          blockSilent(event);
          openExternal(originalUrl);
          return;
        }
      }

      if (href.indexOf("/nfsd/") === 0) {
        blockSilent(event);
        openExternal(absoluteOriginalUrl(href));
        return;
      }

      if (onclick.indexOf("PrimeFaces.ab") !== -1 || onclick.indexOf(".submit(") !== -1 || link.type === "submit") {
        blockSilent(event);
      }
    },
    true
  );

  document.addEventListener("DOMContentLoaded", function () {
    installRequestBlockers();
    prepareOriginalLinks();

    document.querySelectorAll("form").forEach(function (form) {
      if (!form.dataset.originalAction) {
        form.dataset.originalAction = form.getAttribute("action") || "";
      }

      form.setAttribute("action", "#");
      form.setAttribute("data-static-disabled", "true");
    });
  });
})();
