package com.example.demo.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
@Table(name="Videos")
public class Videos {
	 @Id
	   @GeneratedValue(strategy = GenerationType.AUTO)
	   @Column(nullable = false, updatable = false)
		private long id;
		@Column(name="title")
		private String title;
		@Column(name="url")
		private String url;
		  @ManyToOne(optional=false)
		    @JoinColumn(name="id", nullable=false,insertable=false, updatable=false)
		    private Course course;

}
