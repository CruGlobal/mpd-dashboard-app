<?php namespace GlobalTechnology\MPDDashboard {

	class RedisTicketStorage extends \CAS_PGTStorage_AbstractStorage {

		/**
		 * @type \Redis
		 */
		private $_redis;

		public function __construct( $cas_parent, $redis, $prefix ) {
			parent::__construct( $cas_parent );
			$this->_redis = $redis;
			$this->_redis->setOption( \Redis::OPT_SERIALIZER, \Redis::SERIALIZER_PHP );
			$this->_redis->setOption( \Redis::OPT_PREFIX, $prefix );
		}

		function getStorageType() {
			return 'redis';
		}

		function getStorageInfo() {
			return 'redis';
		}

		function write( $pgt, $pgt_iou ) {
			$this->_redis->set( $pgt_iou, $pgt );
		}

		function read( $pgt_iou ) {
			return $this->_redis->get( $pgt_iou );
		}
	}
}
