(function () {
  var linksData = [
    { "product_id": 6, "name": "CallOfDuty", "parents_id": [{id: 3}]},
    { "product_id": 1, "name": "World Of Warcraft", "parents_id": [{id: 2}]},
    { "product_id": 2, "name": "Prince of Persia", "parents_id": null },
    { "product_id": 3, "name": "Assassin's Creed", "parents_id": [{id: 1}]},
    { "product_id": 4, "name": "Diablo", "parents_id": [{id: 1}]},
    { "product_id": 10, "name": "Diablo 1", "parents_id": [{id: 1}]},
    { "product_id": 11, "name": "Diablo 2", "parents_id": [{id: 1}, {id: 5}]},
    { "product_id": 5, "name": "Lineage 2 Classic", "parents_id": [{id: 2}]},
    { "product_id": 7, "name": "CounterStrike 1.6", "parents_id": [{id: 4}]},
    { "product_id": 8, "name": "GTA San Andreas", "parents_id": [{id: 7},
        {id: 4}]},
    { "product_id": 9, "name": "Cossacks: European battles", "parents_id": [{id: 8},
        {id: 5}]}
  ],
    $productsSelect = $('select.products-select'),
    svg,
    DOWNSALE_TYPE = 'downsale',
    UPSALE_TYPE = 'upsale',
    SVG_WIDTH = 1400,
    SVG_HEIGHT = 500,
    SVG_MARGIN = {top: 20, right: 120, bottom: 20, left: 120},
    MARKER_CLASS_END = '_marker',
    UPSALE_MARKER_CLASS = "upsale",
    DOWNSALE_MARKER_CLASS =  "downsale",
    CLASS_TO_HIDE_ELEMENT = 'hidden',
    LINK_CLASS = 'link',
    NODE_CLASS = 'node',
    SPACE_BETWEEN_DEPTH_LEVELS = 180,
    TOP_DIRECTED_LINK_PATH_COORD = 0,
    BOTTOM_DIRECTED_LINK_PATH_COORD = 500,
    MARKER_CSS_STYLES = {
      viewBox: '0 -5 10 10',
      refX: 18,
      refY: 0,
      markerWidth: 6,
      markerHeight: 6,
      orient: 'auto'
    },
    CIRCLE_CSS_STYLES = {
      r: 10,
      fill: '#fff',
      fillOpacity: 1,
      text: {
        dy: '-1em',
        dx: {
          left: '13px',
          right: '-13px;'
        }
      }
    },
    renderOptions = {
      svgWidth: SVG_WIDTH,
      svgHeight: SVG_HEIGHT,
      svgMargin: SVG_MARGIN,
      classes: {
        classToHideElement: CLASS_TO_HIDE_ELEMENT,
        linkClass: LINK_CLASS,
        nodeClass: NODE_CLASS
      },
      spaceBetweenDepthLevels: SPACE_BETWEEN_DEPTH_LEVELS,
      topDirectedLinkPathCoord: TOP_DIRECTED_LINK_PATH_COORD,
      bottomDirectedLinkPathCoord: BOTTOM_DIRECTED_LINK_PATH_COORD,

      markerClassEnd: MARKER_CLASS_END,
      upsaleMarkerClass: UPSALE_MARKER_CLASS + MARKER_CLASS_END,
      downsaleMarkerClass: DOWNSALE_MARKER_CLASS + MARKER_CLASS_END,
      markerCssStyles: MARKER_CSS_STYLES,

      circleCssStyles: CIRCLE_CSS_STYLES
    };

  function GraphLink(params) {
    return {
      name: params.name || '--',
      parents_id: params.parents_id || null,
      type: UPSALE_TYPE,
      product_id: params.product_id
    };
  }

  function Node(params) {
    return {
      name: params.name || '--',
      parent: params.parent || null,
      type: UPSALE_TYPE
    };
  }
  function reduceArray(arr) {
    return arr.reduce(function (map, item) {
      map[item.product_id] =  item;
      return map;
    }, {});
  }

  function generateTree(realData) {
    var data = JSON.parse(JSON.stringify(realData)),
      dataMap = reduceArray(data),
      treeData = [];

    //Adding data-target attribute with id's of targets of every node
    data.forEach(function (node, index) {
      node.index = index;
      if (node.parents_id) {
        var parentLength = node.parents_id.length;
        node.parents_id.forEach(function (parentItem, index) {
          var parent = dataMap[parentItem.id];
          if (parentLength > 1) {
            if (index !== parentLength - 1) {
              if (!parent.data_targets_id) {
                parent.data_targets_id = [{id: node.product_id, type: UPSALE_TYPE}];
              } else {
                parent.data_targets_id.push({id: node.product_id, type: UPSALE_TYPE});
              }
              return;
            }
          }
          parent.children =  parent.children || [];
          node.type = UPSALE_TYPE;
          parent.children.push(node);
        });
      } else {
        treeData.push(node);
      }

    });

    function addEmptyNodes(node) {
      if (node.children) {
        //Should to add only 1 empty node
        node.children.forEach(function (child) {
          addEmptyNodes(child);
        });
      }
    }
    addEmptyNodes(treeData[0]);
    return treeData[0];
  }

  function drawNodes(nodes) {
    console.log(nodes);
    var i = 0,
      node = svg.selectAll("g.node")
        .data(nodes, function (d) {
          if (!d.id) {
            i += 1;
            d.id = i;
          }
          return d.id;
        });
    return node.enter().append("g")
      .attr("class", function (d) {
        var nodeClasses = renderOptions.classes.nodeClass;
        return nodeClasses;
      })
      .attr("data-index", function (d) {
        return d.index;
      })
      .attr("data-parent-index", function (d) {
        if (d.parent) {
          return d.parent.index;
        }
      })
      .attr("data-type", function (d) {
        return UPSALE_TYPE;
      })
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });
  }

  function drawLinks(links, nodes) {
    var diagonal = window.d3.svg.diagonal()
        .projection(function (d) {
          return [d.y, d.x];
        }),
      link,
      nodesMap,
      targets,
      maxTargetsCount;
    //Drawing links for one parent
    nodesMap = reduceArray(nodes);
    link = svg.selectAll("path.link")
      .data(links, function (d) {
        return d.target.id;
      });
    link.enter().insert("path", "g")
      .attr("class", function (d) {
        var linkClasses = renderOptions.classes.linkClass + " " + UPSALE_TYPE;
        if (d.source.data_targets_id) {
          targets = d.source.data_targets_id;
        }
        return linkClasses;
      })
      .attr("d", function (d) {
        return diagonal(d);
      })
      .attr("marker-end", function (d) {
        return "url(#" + d.target.type + renderOptions.markerClassEnd + ")";
      });


    maxTargetsCount = 0;

    //Adding links in case when it is several parents for one node
    function addSpecialParent(position) {
      link.enter().insert("path", "g")
        .attr("d", function (d) {
          if (d.source.data_targets_id) {
            targets = d.source.data_targets_id;
            var length = targets.length,
              sep = ',',
              newPath = '',
              path,
              pathDigitsMas,
              pathDigitsAndSpacesMas,
              spaceCoord;
            if (length > maxTargetsCount) {
              maxTargetsCount = length;
            }
            if (position < length) {
              d.target = nodesMap[targets[position].id];
            } else {
              return;
            }

            //Conputing to which direction will be directed bezier link: top or bottom
            path = diagonal(d);
            pathDigitsMas = path.match(/([0-9\.])+/g);
            pathDigitsAndSpacesMas = path.match(/([A-Za-z0-9_ \.])+/g);

            pathDigitsAndSpacesMas.forEach(function (word, index) {
              if (index !== 3) {
                newPath += word;
              } else {
                //if (targets[position].type === UPSALE_TYPE) {
                  //spaceCoord = renderOptions.topDirectedLinkPathCoord;
                //} else {
                  spaceCoord = renderOptions.bottomDirectedLinkPathCoord;
                //}
                newPath += spaceCoord + ' ' + pathDigitsMas[6];
              }
              if (index !== 4) {
                newPath += sep;
              }
            });

            return newPath;
          }
        })
        .attr("class", function (d) {
          if (d.source.data_targets_id) {
            targets = d.source.data_targets_id;
            if (position < targets.length) {
              return renderOptions.classes.linkClass + ' ' + targets[position].type;
            }
          }
        })
        .attr("marker-end", function (d) {
          if (d.source.data_targets_id) {
            targets = d.source.data_targets_id;
            if (position < targets.length) {
              return "url(#" + targets[position].type + renderOptions.markerClassEnd + ")";
            }
          }
        });

    }
    addSpecialParent(0);
    if (maxTargetsCount === 2) {
      addSpecialParent(1);
    }
  }

  function renderTree(root, nodeClickHandler) {
    var margin = renderOptions.svgMargin,
      width = renderOptions.svgWidth - margin.right - margin.left,
      height = renderOptions.svgHeight - margin.top - margin.bottom,
      tree,
      nodes,
      nodeGroup,
      links,
      nodesMap,
      isBackRelations;

    tree = window.d3.layout.tree()
      .size([height, width]);

    svg = window.d3.select(".graph-container").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    ////Append arrow
    svg.append("svg:defs").selectAll("marker")
      .data([renderOptions.upsaleMarkerClass, renderOptions.downsaleMarkerClass])
      .enter().append("svg:marker")
      .attr("id", String)
      .attr("class", String)
      .attr("viewBox", renderOptions.markerCssStyles.viewBox)
      .attr("refX", renderOptions.markerCssStyles.refX)
      .attr("refY", renderOptions.markerCssStyles.refY)
      .attr("markerWidth", renderOptions.markerCssStyles.markerWidth)
      .attr("markerHeight", renderOptions.markerCssStyles.markerHeight)
      .attr("orient", renderOptions.markerCssStyles.orient)
      .append("svg:path")
      .attr("d", "M0,-5L10,0L0,5");

    // Compute the new tree layout.
    nodes = tree.nodes(root).reverse();
    links = tree.links(nodes);

    nodesMap = reduceArray(nodes);

    function replaceNodeAndChildren(node, root, distance) {
      if (node.children) {
        node.children.forEach(function (child) {
          replaceNodeAndChildren(child, root, distance);
        });
      }
      node.y = (distance  + (node.depth - root.depth)) * renderOptions.spaceBetweenDepthLevels;
      node.depth = (distance  + (node.depth - root.depth));
    }

    // Normalize for fixed-depth.
    isBackRelations = false;

    nodes.forEach(function (d) {
      d.y = d.depth * renderOptions.spaceBetweenDepthLevels;
    });

    nodeGroup = drawNodes(nodes);

    nodeGroup.append("circle")
      .attr("r", renderOptions.circleCssStyles.r)
      .style("fill", renderOptions.circleCssStyles.fill);

    nodeGroup.append("text")
      .attr("x", function (d) {
        /*jslint nomen: true*/
        return d.children || d._children ? renderOptions.circleCssStyles.text.right : renderOptions.circleCssStyles.text.left;
      })
      .attr("dy", renderOptions.circleCssStyles.text.dy)
      .attr("text-anchor", function (d) {
        /*jslint nomen: true*/
        return d.children || d._children ? "end" : "start";
      })
      .text(function (d) { return d.name; })
      .style("fill-opacity", renderOptions.circleCssStyles.fillOpacity);

    drawLinks(links, nodes);

    $('.' + renderOptions.classes.nodeClass).on('click', nodeClickHandler);
  }

  function nodeClickHandler() {
    console.log("clicked a node");
  }

  renderTree(generateTree(linksData), nodeClickHandler);

}());